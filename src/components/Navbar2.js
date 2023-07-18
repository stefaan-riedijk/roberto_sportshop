import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import DropdownHover from './DropdownHover'
import DropdownNormal from './DropdownNormal'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



function Navbar() {
  return (
    <div className='sticky top-0 w-full bg-blue-500 text-white h-24 items-center z-10 flex justify-normal'>
      <h1 className='px-10 text-2xl mr-16'><a href='\'>Sport in Schiedam</a></h1>
      <ul className='flex items-center'>
        <li className='px-4 hidden md:inline'>
        <DropdownHover />
        </li>


        {/*   hieronder nog de weergave hidden fixen voor kleine beeldschermen
        */}
        
        <li className='px-16 xl:px-28 2xl:px-32 hidden lg:inline'>Mission</li>
        <li className='px-16 xl:px-28 2xl:px-32 hidden lg:inline'>About</li>
        <li className='px-16 md:px-18 md:items-center xl:px-28 2xl:px-32 hidden md:inline'><Link href='/book-a-call'>Contact</Link></li>

      </ul>
      <div className='items-center mr-10 container flex sticky justify-end'>
        <DropdownNormal />
      </div>

    </div>
  )
}

export default Navbar