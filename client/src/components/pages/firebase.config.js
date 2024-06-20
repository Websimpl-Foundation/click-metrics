import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// firebase.config.js
const firebaseConfig = {
  //enter the config here
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
