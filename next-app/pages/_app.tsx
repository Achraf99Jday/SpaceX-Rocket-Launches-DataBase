import {ApolloProvider} from "@apollo/client";
import type {AppProps} from "next/app";
import {useApollo} from "../lib/apolloClient";
import "../styles/globals.css";
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

function MyApp({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>

  );
}

export default MyApp;
