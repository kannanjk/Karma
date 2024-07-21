import Laout from "@/Components/Laout";
import LoginModal from "@/Components/Modals/LoginModal";
import RegisterModal from "@/Components/Modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from 'next-auth/react'
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster/>
      <RegisterModal />
      <LoginModal />
      <Laout>
        <Component {...pageProps} />
      </Laout>
    </SessionProvider>
  )
}
