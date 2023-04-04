import React from 'react';
import * as Auth from '@/services/Auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout({ children }: React.PropsWithChildren) {
  const router = useRouter();

  const handleLogoutClick = () => {
    Auth.unauthenticate();
    router.reload();
  };

  return (
    <div className="container min-h-screen relative mx-auto px-12 bg-neutral-100">
      <header className="relative py-2 flex justify-between">
        <Link href="/">
          <h1 className="font-extrabold text-4xl bg-white flex items-center bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-200">
            SwapiExplorer v0.1
          </h1>
        </Link>
        <button
          className="font-semibold py-2 px-4 border-2 rounded-lg border-neutral-200 hover:border-white hover:bg-white transition"
          type="button"
          onClick={handleLogoutClick}
        >
          Log out
        </button>
      </header>
      <main className="mt-6">
        {children}
      </main>
    </div>
  );
}
