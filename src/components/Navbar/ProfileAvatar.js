import React, { useState, Fragment, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { Menu, Transition } from "@headlessui/react";
import { useOutsideClick } from "./../../hooks/useOutsideClick";
// import AvatarDropdown from "./AvatarDropdown";

let navItems = [
  { id: 1, slug: "dashboard", text: "Meet the Trainer" },
  { id: 2, slug: "voorkeursinstellingen", text: "Voorkeursinstellingen" },
  { id: 3, slug: "meet-the-trainer", text: "Meet the Trainer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProfileAvatar({ menuItems }) {
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
  const ref = useOutsideClick(() => {
    setShowMenu(false);
  });

  if (session) {
    return (
      <div className="flex">
        <Menu as="div" className="relative h-full" ref={ref}>
          <Menu.Button
            className="mx-0 object-fill"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img
              src={session.user.image}
              width={50}
              height={50}
              className=" min-w-full rounded-full"
            />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            show={showMenu}
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-blue-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className="text-md block border-b-2
                      border-black px-4 py-2 pb-3 font-semibold text-gray-900"
                  >
                    <p>{`Logged in as ${session.user.name}`}</p>
                  </div>
                )}
              </Menu.Item>
              {navItems.map((menuItem) => (
                <Menu.Item key={menuItem.id}>
                  {({ active }) => (
                    <a
                      href={"/" + menuItem.slug}
                      className={classNames(
                        active ? "bg-gray-300 font-semibold" : "font-medium",
                        "text-md block px-4 py-2 text-black",
                      )}
                    >
                      {menuItem.text}
                    </a>
                  )}
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <div
                    className=" block
                      px-4 py-2 text-sm text-gray-900"
                  >
                    <Button />
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    );
  }
}

export default ProfileAvatar;

function Button() {
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
        className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Sign Out
      </button>
    </div>
  );
}
