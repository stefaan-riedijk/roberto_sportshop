import React, { useState } from "react";

function HamburgerNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        class="ml-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full" id="navbar-hamburger">
        <ul class="mt-4 flex flex-col rounded-lg bg-gray-50 font-medium dark:border-gray-700 dark:bg-gray-800">
          <li>
            <a
              href="#"
              class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:bg-blue-600"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-white"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerNavbar;
