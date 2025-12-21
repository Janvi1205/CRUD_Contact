import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgJy9CVHwjhvdRSKEamZrhvfmxNriCvBQ",
  authDomain: "crudcontact-af255.firebaseapp.com",
  projectId: "crudcontact-af255",
  storageBucket: "crudcontact-af255.firebasestorage.app",
  messagingSenderId: "993177642506",
  appId: "1:993177642506:web:3586c0cc9e304d420fe1f3",
  measurementId: "G-GTMX373N6E"
};

const app = initializeApp(firebaseConfig);

export default app;