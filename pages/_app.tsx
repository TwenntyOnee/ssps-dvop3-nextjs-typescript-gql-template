import { AppContext, AppInitialProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../styles/globals.css";

/**
 *
 * @param {NextComponentType<NextPageContext, any, P>} Component
 * @param {any} pageProps
 * @return {AppProps} Component
 */
const App = ({ Component, pageProps }: AppContext & AppInitialProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
