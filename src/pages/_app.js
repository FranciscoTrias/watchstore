import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://rsms.me/"/>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

    </Head>

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
