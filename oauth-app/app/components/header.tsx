'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

const Header = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  return (
    <header className="fixed top-0 w-full z-10">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
              width={36}
              height={36}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            {session ? (
              <>
              <button
                onClick={() => {
                  signOut();
                }}
                className="text-gray-800 dark:text-white 
                hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium 
                rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
                dark:hover:bg-gray-700 focus:outline-none 
                dark:focus:ring-gray-800"
                >
                Log out
              </button>
              <Link
                href="/profile"
                className={`text-gray-800 dark:text-white 
                        hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium 
                        rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
                        dark:hover:bg-gray-700 focus:outline-none 
                        dark:focus:ring-gray-800 ${
                          pathname === '/profile' ? 'dark:bg-gray-700' : ''
                        }`}
              >
                Profile
              </Link>
                </>
            ) : (
              <Link
                href="/login"
                className={`text-gray-800 dark:text-white 
                        hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium 
                        rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 
                        dark:hover:bg-gray-700 focus:outline-none 
                        dark:focus:ring-gray-800 ${
                          pathname === '/login' ? 'dark:bg-gray-700' : ''
                        }`}
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
