import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA69qlNp6BCAmvFm_MZgVNA0BMk6asP52s",
  authDomain: "music-app-1a739.firebaseapp.com",
  projectId: "music-app-1a739",
  storageBucket: "music-app-1a739.appspot.com",
  messagingSenderId: "292271290612",
  appId: "1:292271290612:web:7f29d82380755285d7c6a1",
  measurementId: "G-CLRHJ70ERR"
};

// Initialize Firebase
const  app = initializeApp(firebaseConfig);
 const storage = getStorage(app);
const analytics = getAnalytics(app);
 export { app, storage };
// import { getApp, getApps, initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyAlIm8Z8QaUKW_hiKqV9ka_Br5sw1a2DV8",
//   authDomain: "ethio-project.firebaseapp.com",
//   projectId: "ethio-project",
//   storageBucket: "ethio-project.appspot.com",
//   messagingSenderId: "789447859395",
//   appId: "1:789447859395:web:aa83c725e22e321e3a5676",
// };

// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
// const storage = getStorage(app);

// export { app, storage };
// //Import the functions you need from the SDKs you need

