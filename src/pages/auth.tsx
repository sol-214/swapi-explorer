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
          <input
            type="text"
            placeholder="Username"
            value="Test"
            className="w-72 px-6 py-4 rounded-lg border-2 border-neutral-200 focus:border-neutral-300 focus:outline-none transition"
          />
          <input
            type="password"
            placeholder="*****"
            value="Test"
            className="w-72 px-6 py-4 rounded-lg border-2 border-neutral-200 focus:border-neutral-300 focus:outline-none transition"
          />
          <button
            type="submit"
            className="font-semibold px-6 py-4 border-2 rounded-lg border-neutral-200 hover:border-white hover:bg-white transition"
          >
            Log in
          </button>
        </form>
      </main>
    </>
  );
}
