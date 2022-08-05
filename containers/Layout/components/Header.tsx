import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ChangeTheme from "@/containers/Layout/components/ChangeTheme";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const navLinks = useMemo(
    () => [
      {
        id: 1,
        title: "Todos",
        href: "/",
      },
      {
        id: 2,
        title: "Add",
        href: "/add-todo",
      },
      {
        id: 3,
        title: "Profile",
        href: "/profile",
      },
      {
        id: 4,
        title: session ? "Sign out" : "Sign in",
        onClick: () => (session ? signOut() : signIn("github")),
      },
    ],
    [session]
  );

  return (
    <header className="flex shadow-md justify-between items-center p-5">
      <Link href="/">
        <a className="dark:text-white">Task manager</a>
      </Link>
      <nav>
        <ul
          className={`flex justify-center items-center ${
            status === "loading" ? "opacity-0" : "opacity-100"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              {link.href ? (
                <Link href={link.href}>
                  <a
                    className={`px-5 py-1 rounded-md dark:text-white inline-block ${
                      link.href === router.pathname &&
                      "bg-violet-400 text-white"
                    }`}
                  >
                    {link.title}
                  </a>
                </Link>
              ) : (
                <button
                  onClick={link.onClick}
                  className="bg-blue-400 px-5 py-1 rounded-md text-white inline-block ml-2"
                >
                  {link.title}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ChangeTheme />
    </header>
  );
}

export default Header;
