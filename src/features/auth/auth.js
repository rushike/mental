import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, signInWithPopup,updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { GOOGLE, USER_PASS } from "../../constants";

import store, {pstore} from '../../app/store';

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
      var user;
      if (provider == GOOGLE) user = await this.googleSignIn()
      if (provider == USER_PASS) user = await this.userPassSignIn(email, password)
      store.dispatch(LogInUser(this.getUser(user)))
      return user
    }

    async createUser(email, password, options = {}){
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      const user = credentials.user
      // pstore.dispatch(LogInUser(this.getUser(user)))
      await updateProfile(user, {
        displayName: user.email.split("@")[0],
        firstname : options["firstname"],
        lastname : options["lastname"]
      })
      return user
    }

    async userPassSignIn(email, password) {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      return credentials.user
    }

    async googleSignIn() {
        const provider = new GoogleAuthProvider();
        // await signInWithRedirect(auth, provider)
        // const res = await getRedirectResult(auth)
        const res = await signInWithPopup(auth, provider)

        console.log("rs : ", res);
        
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;

        store.dispatch(SetToken(token));
        // store.dispatch(LogInUser(this.getUser(res.user)));
        return res.user;
    }

    async logOut(){
      const res = await signOut(auth);
      store.dispatch(SetToken(null));
      // pstore.dispatch(LogOutUser()); 
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