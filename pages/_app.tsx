import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 *
 * @param {NextComponentType<NextPageContext, any, P>} Component
 * @param {any} pageProps
 * @return {AppProps} Component
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
