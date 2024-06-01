"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const navlintks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/posts",
    label: "posts",
  },
  {
    href: "/create-posts",
    label: "create-posts",
  },
];
const Header = () => {
  const pathname = usePathname();
  console.log("path", pathname);
  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href={"/"}>
        <Image
          src="https://www.banimode.com/themes/new/img/b-logo.png"
          alt="banilogo"
          width="27"
          height="26"
          className="w-[27px] h-[26px]"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navlintks.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.href}
                className={`${
                  pathname === nav.href
                    ? "text-zinc-900  font-semibold"
                    : "text-zinc-400"
                }`}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
