import Laout from "@/Components/Laout";
import LoginModal from "@/Components/Modals/LoginModal";
import RegisterModal from "@/Components/Modals/RegisterModal";
import { store } from "@/Redux/Store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Toaster />
      <RegisterModal />
      <LoginModal />
      {/* <Laout>
        <Component {...pageProps} />
      </Laout> */} 
      <h1 className="text-red-500">kannan</h1>
    </Provider>
  )
}
 