import app from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBfTGj1u46hr6WFceFGwxdyG6y5ks3ltGI",
    authDomain: "binarybites-47dca.firebaseapp.com",
    databaseURL: "https://binarybites-47dca.firebaseio.com",
    projectId: "binarybites-47dca",
    storageBucket: "binarybites-47dca.appspot.com",
    messagingSenderId: "1057282362819",
    appId: "1:1057282362819:web:3a26c75e92269e35108176"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.db = app.database();
    }
  }
  export default Firebase;