import React, { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'

// import DropdownNormal from './DropdownNormal'
import DropdownHover from './DropdownHoverProps'
import NavbarHamburger from './HamburgerNavbar2'
import Button from './Button'


const servicesDropdownPaths = {
  title:"Services",
  items: [
    {id:1, slug : "workout-programs", text : "Workout Programs"}, 
    {id:2, slug : "nutrition-plans", text : "Nutrition Plans"}
  ]
}

const aboutDropdownPaths = {
  title:"About",
  items: [
    {id:1, slug : "meet-the-trainer", text : "Meet the Trainer"}, 
    {id:2, slug : "testimonials", text : "Testimonials"},
    {id:3, slug : "mission-and-values", text : "Mission and Values"}
  ]
}

const contactDropdownPaths = {
  title:"Contact",
  items: [
    {id:1, slug : "general-inquiries", text : "General Inquiries"},
    {id:2, slug : "book-consultation", text : "Book a consultation"}, 

  ]
}

const CTAButtonPaths = {
  text: "Log in",
  slug: "log-in"
}

function Navbar() {
  return (
      <div className='sticky top-0 w-full bg-blue-500 text-white h-24 items-center z-10 flex justify-normal'>
              <h1 className='px-10 text-2xl mr-16 max-w-lg'><a href='\'>Sport in Schiedam</a></h1>
              <div className='mx-5 flex w-full'>

                    <ul className='hidden items-center px-4 lg:flex m-auto w-2xl space-x-14'>

                            <li className='px-4 inline'>
                              <DropdownHover menuTitle={servicesDropdownPaths.title} menuItems={servicesDropdownPaths.items}/>
                            </li>
                            <li className='px-4 inline'>
                              <DropdownHover menuTitle={aboutDropdownPaths.title} menuItems={aboutDropdownPaths.items}/>
                            </li>
                            <li className='px-4 inline'>
                              <DropdownHover menuTitle={contactDropdownPaths.title} menuItems={contactDropdownPaths.items}/>
                            </li>

                    </ul>
                    <div className='items-center inline-flex space-x-10 ml-auto'>
                            <Button btnText={CTAButtonPaths.text} btnSlug={CTAButtonPaths.slug}
                                      className="inline-block"/>
                            <NavbarHamburger className='inline-block md:hidden'/>
                    </div>
              </div>
      </div>
  )
}

export default Navbar