import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Layout} from "@monorepo-next/shared/ui";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to app!</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default CustomApp;
