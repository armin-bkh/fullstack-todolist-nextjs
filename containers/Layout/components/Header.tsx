import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ChangeTheme from "@/containers/Layout/components/ChangeTheme";

const navLinks = [
  {
    title: "Todos",
    href: "/",
  },
  {
    title: "Add",
    href: "/add-todo",
  },
  {
    title: "Login",
    href: "/auth/login",
  },
];

function Header() {
  const router = useRouter();

  return (
    <header className="flex shadow-md justify-between items-center p-5">
      <Link href="/">
        <a className="dark:text-white">Task manager</a>
      </Link>
      <nav>
        <ul className="flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <a
                  className={`px-5 py-2 rounded-md dark:text-white ${
                    link.href === router.pathname && "bg-violet-400 text-white"
                  }`}
                >
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ChangeTheme />
    </header>
  );
}

export default Header;
