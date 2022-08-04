import { AppProps } from "next/app";

import "@/styles/globals.css";
import ThemeProvider from "@/containers/Providers/ThemeProvider";
import Layout from "@/containers/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
