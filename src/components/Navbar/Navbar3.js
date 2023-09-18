import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// import DropdownNormal from './DropdownNormal'
import DropdownHover from "./DropdownHoverProps";
import NavbarHamburger from "./HamburgerNavbar2";
import ProfileAvatar from "./ProfileAvatar";
import LoginButton from "./LoginButton";
import logoPic from "@/assets/images/R-ForceLogo.jpg";

const servicesDropdownPaths = {
  title: "Services",
  items: [
    { id: 1, slug: "workout-programs", text: "Workout Programs" },
    { id: 2, slug: "nutrition-plans", text: "Nutrition Plans" },
  ],
};

const aboutDropdownPaths = {
  title: "About",
  items: [
    { id: 1, slug: "meet-the-trainer", text: "Meet the Trainer" },
    { id: 2, slug: "testimonials", text: "Testimonials" },
    { id: 3, slug: "mission-and-values", text: "Mission and Values" },
  ],
};

const contactDropdownPaths = {
  title: "Contact",
  items: [
    { id: 1, slug: "general-inquiries", text: "General Inquiries" },
    { id: 2, slug: "book-consultation", text: "Book a consultation" },
  ],
};

const CTAButtonPaths = {
  text: "Log in",
  slug: "log-in",
};

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex h-24 w-full items-center justify-normal bg-blue-500 text-white opacity-90">
      <h1 className="relative my-3 ml-4 mr-16 h-full max-w-lg px-10 text-2xl">
        <a href="\">
          <Image src={logoPic} alt="" fill={true} className="object-contain" />
        </a>
      </h1>
      <div className="mx-5 flex w-full">
        <ul className="w-2xl m-auto hidden items-center space-x-14 px-4 lg:flex">
          <li className="inline px-4">
            <DropdownHover
              menuTitle={servicesDropdownPaths.title}
              menuItems={servicesDropdownPaths.items}
            />
          </li>
          <li className="inline px-4">
            <DropdownHover
              menuTitle={aboutDropdownPaths.title}
              menuItems={aboutDropdownPaths.items}
            />
          </li>
          <li className="inline px-4">
            <DropdownHover
              menuTitle={contactDropdownPaths.title}
              menuItems={contactDropdownPaths.items}
            />
          </li>
        </ul>
        <div className="ml-auto inline-flex items-center space-x-10">
          <ProfileAvatar />
          <LoginButton />
          <NavbarHamburger className="inline-block md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
