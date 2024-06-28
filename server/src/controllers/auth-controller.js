const { admin, db } = require("../Firebase/firebase");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if user already exists in Firebase
    const existingUserRecord = await admin.auth().getUserByEmail(email).catch(() => null);

    if (existingUserRecord) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create user in Firebase with plain password (Firebase will hash it)
    const newUserRecord = await admin.auth().createUser({
      email,
      password, // Firebase will handle password hashing
      displayName: username
    });

    // Save user additional data to Firestore
    await db.collection("users").doc(newUserRecord.uid).set({ 
      username, 
      email, 
      phone,
      password: await bcrypt.hash(password, 10) // Store hashed password in Firestore for manual comparison during login
    });

    // Generate Firebase custom token
    const token = await admin.auth().createCustomToken(newUserRecord.uid);

    res.status(201).json({ msg: "Registration Successful", token, userId: newUserRecord.uid });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Get user from Firebase by email
    const userRecord = await admin.auth().getUserByEmail(email).catch(() => null);

    if (!userRecord) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Fetch user additional data from Firestore
    const userDoc = await db.collection("users").doc(userRecord.uid).get();
    const userData = userDoc.data();

    if (!userData) {
      return res.status(400).json({ message: "User data not found" });
    }

    // Compare input password with hashed password stored in Firestore
    const isPasswordValid = await bcrypt.compare(password, userData.password);

    if (isPasswordValid) {
      const token = await admin.auth().createCustomToken(userRecord.uid);
      res.status(200).json({ message: "Login Successful", token, userId: userRecord.uid });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };
