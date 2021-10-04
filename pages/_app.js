import "../styles/globals.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    const firebaseConfig = {
      apiKey: "AIzaSyCBKZLLgmZzWAsLUn4pf3K4hJMqIbDGOIc",
      authDomain: "test-eba94.firebaseapp.com",
      projectId: "test-eba94",
      storageBucket: "test-eba94.appspot.com",
      messagingSenderId: "833345045052",
      appId: "1:833345045052:web:4ea3a8bb2b5dd9ccc37939",
      measurementId: "G-ZH49PSTF5W",
    };
    // Firebaseの初期化
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  },[])
  return <Component {...pageProps} />;
}

export default MyApp;
