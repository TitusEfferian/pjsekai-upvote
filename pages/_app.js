import "../styles/globals.css";
import { FirebaseAppProvider } from "reactfire";

/**
 * this is a client key
 * yeah, can't hide because mandatory need on the client
 * security will be handle on the firebase dashboard
 */
const firebaseConfig = {
  apiKey: "AIzaSyDwFpK5NEHZ8n12wYpz_7IBxTuFJQRHmWw",
  authDomain: "project-sekai-upvote.firebaseapp.com",
  projectId: "project-sekai-upvote",
  storageBucket: "project-sekai-upvote.appspot.com",
  messagingSenderId: "551805727486",
  appId: "1:551805727486:web:5af2699843c3d4e9296baf",
  measurementId: "G-DJT3J9EDJN",
};

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
