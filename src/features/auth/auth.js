import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithPopup,getRedirectResult, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { GOOGLE, USER_PASS } from "../../constants";

import store from '../../app/store';

import {SetToken, LogInUser, LogOutUser} from "./auth_slice"

// var serviceAccount = require("../../secrets/posittvibe-firebase-adminsdk-2gnfp-99ddf1cd68.json");
const app = initializeApp({
  apiKey: "AIzaSyCz9Vao28B4PWhtOIeo0MAOTlswe4vyFQ4",
  authDomain: "posittvibe.firebaseapp.com",
  projectId: "posittvibe",
  storageBucket: "posittvibe.appspot.com",
  messagingSenderId: "1029513607847",
  appId: "1:1029513607847:web:fa7cf8023ab034f712b982",
  measurementId: "G-1QL7BQQTF4"
  });

const analytics = getAnalytics(app);
const auth = getAuth();

class Auth {
    async login(provider, email = null, password = null) { 
      if (provider == GOOGLE) return await this.googleSignIn()
      if (provider == USER_PASS) return await this.userPassAuth(email, password)
    }

    async userPassAuth(email, password) {
      return null
    }

    async googleSignIn() {
        const provider = new GoogleAuthProvider();
        console.log("Sign In with Pop Up");
        // await signInWithRedirect(auth, provider)
        // const res = await getRedirectResult(auth)
        const res = await signInWithPopup(auth, provider)

        console.log("rs : ", res);
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;

        store.dispatch(SetToken(token));
        // store.dispatch(LogInUser(this.getUser(res.user)));
        return this.getUser(res.user);
    }

    async logOut(){
      const res = await signOut(auth);
      store.dispatch(SetToken(null));
      // store.dispatch(LogOutUser()); 
      return null;
    }

    getUser(userObj) {
      const attrs = ["displayName", "email", "photoUrl", "phoneNumber", "isAnonymous"]
      const res = {}
      attrs.forEach(attr=>{
        if(userObj && userObj[attr]) {
          res[attr] = userObj[attr];
        }else res[attr] = null;
      })
      return res
    }
}

export default new Auth()