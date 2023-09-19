import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

function ListItemMobile(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="">
      <button className="flex" onClick={() => setIsOpen(!isOpen)}>
        <p className="mr-2">{props.title}</p>
        {isOpen ? (
          <ChevronUpIcon className="text-white-400 -mr-1 inline-block h-5 w-5 flex-auto align-middle" />
        ) : (
          <ChevronDownIcon className="text-white-400 -mr-1 inline-block h-5 w-5 align-middle" />
        )}
      </button>
      <div
        className={` relative overflow-y-clip transition-all duration-500 ease-in-out ${
          isOpen ? "h-fit" : "h-0"
        }`}
      >
        <ul className="ml-8">
          <li>Gekte</li>
          <li>Parra</li>
        </ul>
      </div>
    </li>
  );
}

export default ListItemMobile;
