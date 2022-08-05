import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import ThemeProvider from "@/containers/Providers/ThemeProvider";
import Layout from "@/containers/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
