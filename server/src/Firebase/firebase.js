// firebase.js
const admin = require("firebase-admin");

if (!admin.apps.length) {
  
  const serviceAccount ={
    "type": "service_account",
    "project_id": "click-metrices",
    "private_key_id": process.env.PRIVATE_KEY_ID,
    "private_key": process.env.PRIVATE_KEY,
    "client_email": "firebase-adminsdk-tzvp8@click-metrices.iam.gserviceaccount.com",
    "client_id": process.env.CLIENT_ID,
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tzvp8%40click-metrices.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  ; 

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-database-name.firebaseio.com'
  });
}

const db = admin.firestore();
module.exports = { admin, db };
