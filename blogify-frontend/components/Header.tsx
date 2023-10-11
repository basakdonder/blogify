import React from "react";
import Logo from "@/public/images/logo.svg";
import Image from "next/image";

const links = [
  {
    title: "Features",
    url: "/features",
  },
  {
    title: "Team",
    url: "/team",
  },
  {
    title: "Sign In",
    url: "/signin",
  },
];

export default function Header() {
  return (
    <div className="px-5 w-full py-10 font-openSans font-normal text-veryDarkBlue lg:px-0">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <Image src={Logo} alt="Fylo Logo" />
        <nav>
          <ul className="flex space-x-5 lg:space-x-14">
            {links.map((link) => (
              <li key={link.title}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
