import "../styles/globals.css";
import HomeLayout from "../layouts/HomeLayout";

function MyApp({ Component, pageProps }) {
  return (
    <HomeLayout>
      <Component {...pageProps} />
    </HomeLayout>
  );
}

export default MyApp;
