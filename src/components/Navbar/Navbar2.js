import React, { Fragment } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import DropdownHover from "./DropdownHover";
import DropdownNormal from "../DropdownNormal";

import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex h-24 w-full items-center justify-normal bg-blue-500 text-white shadow-sm-light">
      <h1 className="mr-16 px-10 text-2xl">
        <a href="\">Sport in Schiedam</a>
      </h1>
      <ul className="flex items-center">
        <li className="hidden px-4 md:inline">
          <DropdownHover />
        </li>

        {/*   hieronder nog de weergave hidden fixen voor kleine beeldschermen
         */}

        <li className="hidden px-16 lg:inline xl:px-28 2xl:px-32">Mission</li>
        <li className="hidden px-16 lg:inline xl:px-28 2xl:px-32">About</li>
        <li className="md:px-18 hidden px-16 md:inline md:items-center xl:px-28 2xl:px-32">
          <Link href="/book-a-call">Contact</Link>
        </li>
      </ul>
      <div className="container sticky mr-10 flex items-center justify-end">
        <DropdownNormal />
      </div>
    </div>
  );
}

export default Navbar;
