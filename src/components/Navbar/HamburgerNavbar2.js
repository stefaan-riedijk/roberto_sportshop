import React, { useState } from "react";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import ListItemMobile from "./ListItemMobile";

function HamburgerNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <button className="mr-4" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? (
            <XMarkIcon className="text-white-400 -mr-1 h-5 w-5" />
          ) : (
            <Bars3BottomRightIcon className="text-white-400 -mr-1 h-5 w-5" />
          )}
        </button>
        <div
          className={` fixed bottom-36 top-20 z-40 w-2/5 rounded-l-xl bg-blue-500 text-center transition-all duration-500 ease-in-out ${
            isNavOpen ? " right-0" : " right-[-100%]"
          }`}
        >
          <ul className="ml-5 py-8 pr-7 text-left text-lg font-medium">
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <ListItemMobile title="Nel" />
            <li>Miene</li>
            <li>Mutten</li>
            <li>Normaal</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamburgerNavbar;
