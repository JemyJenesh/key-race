import "antd/dist/antd.css";
import PlayerForm from "../components/PlayerForm";
import { AppContextProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <PlayerForm />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
