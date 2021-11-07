// const firebaseConfig = {
//     apiKey: "AIzaSyCFJqzt8NVkVMWEIxwoNFFUXC2_zLxNyvs",
//     authDomain: "doctors-eportal.firebaseapp.com",
//     projectId: "doctors-eportal",
//     storageBucket: "doctors-eportal.appspot.com",
//     messagingSenderId: "243061087146",
//     appId: "1:243061087146:web:accb78becf27f572e969d3",
//     measurementId: "G-17CHH64CYD",
//   };

//   export default firebaseConfig;
  






const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };
  export default firebaseConfig;