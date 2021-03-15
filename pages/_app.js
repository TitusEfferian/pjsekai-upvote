import "../styles/globals.css";
import dynamic from "next/dynamic";
const AuthProvider = dynamic(() =>
  import("../contexts/AuthContext").then((x) => x.AuthProvider)
);

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
