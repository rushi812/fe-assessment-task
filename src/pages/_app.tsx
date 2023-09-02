import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Frontend Assessment Task</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
