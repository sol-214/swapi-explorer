import React from 'react';
import { useRouter } from 'next/router';
import styles from './LoadingIndicator.module.scss';

export default function LoadingIndicator() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = (url: string) => {
      setIsLoading(true);
    };

    const handleStop = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return <div className={isLoading ? styles.loading : 'hidden'}></div>;
}
