import "../styles/globals.css";
import { FirebaseAppProvider } from "reactfire";
import Head from "next/head";

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
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Project Sekai Wishlist songs</title>
        <meta name="title" content="Project Sekai Wishlist songs" />
        <meta
          name="description"
          content="List of project sekai wishlist songs from player and community"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Project Sekai Wishlist songs" />
        <meta
          property="og:description"
          content="List of project sekai wishlist songs from player and community"
        />
        <meta
          property="og:image"
          content="https://pjsekai-wishlist.vercel.app/static_img.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Project Sekai Wishlist songs" />
        <meta
          property="twitter:description"
          content="List of project sekai wishlist songs from player and community"
        />
        <meta
          property="twitter:image"
          content="https://pjsekai-wishlist.vercel.app/static_img.png"
        />
        <link
          rel="icon"
          href="/miku_smile.png"
          type="image/png"
          sizes="16x16"
        ></link>
      </Head>
      <Component {...pageProps} />
    </FirebaseAppProvider>
  );
}

export default MyApp;
