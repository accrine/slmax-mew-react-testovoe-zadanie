import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { fonts } from "../lib/fonts";
import { theme } from "../lib/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watches store</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>
        {`
          :root {
            --font-poppins: ${fonts.poppins.style.fontFamily};
          }
        `}
      </style>
    </>
  );
}
