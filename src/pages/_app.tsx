import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import PWA from "@/shared/pwa/PWA";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <PWA>
          <Component {...pageProps} />
        </PWA>
      </SWRConfig>
    </NextUIProvider>
  );
}
