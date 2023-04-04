import * as Auth from '@/services/Auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Layout({ children }: React.PropsWithChildren) {
  const router = useRouter();

  const handleLogoutClick = () => {
    Auth.unauthenticate();
    router.reload();
  };

  const isLogoutVisible = true; // @todo typeof window !== 'undefined' && Auth.isAuthenticated();

  return (
    <div className="container min-h-screen relative mx-auto px-12 bg-neutral-100">
      <header className="relative pt-8 flex justify-between">
        <Link href="/">
          <h1 className="font-extrabold text-4xl bg-white flex items-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600">
            SwapiExplorer
          </h1>
        </Link>
        {isLogoutVisible && (
          <button className="btn-primary" type="button" onClick={handleLogoutClick}>
            Log out
          </button>
        )}
      </header>
      <main className="mt-8">{children}</main>
      <footer className="mt-6 pt-6 pb-8 border-t border-neutral-200 text-center text-neutral-300 text-xs">v0.1</footer>
    </div>
  );
}
