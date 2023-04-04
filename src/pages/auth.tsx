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
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 w-max mx-auto">
          <input type="text" placeholder="Username" value="Test" className="w-72 input" />
          <input type="password" placeholder="*****" value="Test" className="w-72 input" />
          <button type="submit" className="btn-primary">
            Log in
          </button>
        </form>
      </main>
    </>
  );
}
