import React, { useState } from "react";
import Link from "next/link";

function HamburgerNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <section className="MOBILE-MENU flex lg:hidden">
        <div
          className="HAMBURGER-ICON space-y-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-blue-800"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-blue-800"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-blue-800"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute mt-6 px-8 py-8 align-top"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex min-h-[250px] flex-col items-center justify-between">
            <li className="my-8 border-b border-gray-400 uppercase">
              <Link href="/about">About</Link>
            </li>
            <li className="my-8 border-b border-gray-400 uppercase">
              <a href="/portfolio">Portfolio</a>
            </li>
            <li className="my-8 border-b border-gray-400 uppercase">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>
      <style>{`
          .hideMenuNav {
            display: none;
            }
            .showMenuNav {
              display: block;
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              background: white;
              z-index: 10;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              align-items: center;
            }
            `}</style>
    </div>
  );
}

export default HamburgerNavbar;
