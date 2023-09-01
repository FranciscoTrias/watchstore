import Navbar from '@/components/Navbar/Navbar';
import '@/styles/globals.css';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
