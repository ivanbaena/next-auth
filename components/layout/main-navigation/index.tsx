import Link from 'next/link';

const MainNavigation = () => {
  return (
    <header className="bg-indigo-800 w-full h-20 px-4">
      <div className="container mx-auto flex w-full h-20 items-center">
        <Link href="/">
          <a className="w-full">
            <div className="w-full text-4xl text-white font-semibold">
              Next Auth
            </div>
          </a>
        </Link>
        <nav className="w-full">
          <ul className="flex justify-end mx-auto text-white font-semibold items-center gap-8">
            <li className="mr-4">
              <Link href="/auth">Login</Link>
            </li>
            <li className="mr-4">
              <Link href="/profile">Profile</Link>
            </li>
            <li className="">
              <button className="rounded py-2 px-8 border-white border">
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
