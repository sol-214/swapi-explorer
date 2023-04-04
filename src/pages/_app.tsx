import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout';
import LoadingIndicator from '@/components/LoadingIndicator/LoadingIndicator';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LoadingIndicator />
      <Component {...pageProps} />
    </Layout>
  );
}
