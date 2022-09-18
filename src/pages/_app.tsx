import { LoadingProvider } from "../context/LoadingContext";
import { NaviProvider } from "../context/NaviContext";
import "../../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <NaviProvider>
        <Component {...pageProps} />
      </NaviProvider>
    </LoadingProvider>
  );
}

export default MyApp;
