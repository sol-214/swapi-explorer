import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import * as Auth from '@/services/Auth';

const REDIRECT_URL = '/';

export default function AuthPage() {
  const router = useRouter();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    Auth.authenticate();
    router.push(REDIRECT_URL);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <form noValidate onSubmit={handleSubmit}>
          <input type="text" value="Test" />
          <input type="password" value="Test" />
          <button type="submit">Log in</button>
        </form>
      </main>
    </>
  );
}
