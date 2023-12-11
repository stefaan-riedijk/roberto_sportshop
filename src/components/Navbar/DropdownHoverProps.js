import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { Mouse_Memoirs } from "next/font/google";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropdownHover(props) {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <Menu as="div" className="relative mr-5 inline-block h-full w-full">
      <div
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 border-b-4 border-black px-3 py-1 text-lg font-bold text-gray-900 shadow-sm">
          {props.menuTitle}
          {isShowing ? (
            <ChevronUpIcon
              className="text-white-400 -mr-1 mt-1  h-5 w-5"
              aria-hidden="true"
            />
          ) : (
            <ChevronDownIcon
              className="text-white-400 -mr-1 mt-1 h-5 w-5"
              aria-hidden="true"
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition-opacity ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        show={isShowing}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {props.menuItems.map((menuItem) => (
            <Menu.Item key={menuItem.id}>
              {({ active }) => (
                <a
                  href={"/" + menuItem.slug}
                  className={classNames(
                    active ? "bg-blue-400 text-black" : "text-black",
                    "block px-4 py-2 text-lg font-normal",
                  )}
                >
                  {menuItem.text}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
