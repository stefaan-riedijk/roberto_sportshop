import React, { useState } from "react";
import Link from "next/link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";

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
          className={`fixed bottom-60 top-20 z-40 w-1/4 rounded-l-xl bg-blue-500 text-center transition-all duration-500 ease-in-out ${
            isNavOpen ? " right-0" : " right-[-100%]"
          }`}
        >
          <ul className="py-8 pr-7 text-right text-lg ">
            <li>Iene</li>
            <li>Miene</li>
            <li>Mutten</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HamburgerNavbar;
