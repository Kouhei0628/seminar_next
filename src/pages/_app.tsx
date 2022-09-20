import { LoadingProvider } from "../context/LoadingContext";
import { NaviProvider } from "../context/NaviContext";
import "../../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <NaviProvider>
        <Head>
          <title>怪盗の夜宴</title>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, viewport-fit=cover'
          />
        </Head>
        <Component {...pageProps} />
      </NaviProvider>
    </LoadingProvider>
  );
}

export default MyApp;
