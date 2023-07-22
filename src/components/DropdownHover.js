import React, {Fragment} from 'react'

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function DropdownHover() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
          {({open}) => (
            <div>
            <div>
              <Menu.Button onMouseEnter={({target})=> open ? "" : target.click()} className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-offset-gray-100">
                Aanbod
                <ChevronDownIcon
                  className="-mr-1 ml- h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-10 mt-4 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-2">
                        <Menu.Item>
                        {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Nutrition Plans
                        </a>
                      )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                        <Link
                          href="/workout-programs "
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Workout Programs
                        </Link>
                      )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                        <Link
                          href="/nutrition-plans"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Nutrition Plans
                        </Link>
                      )}
                        </Menu.Item>
                    </div>
                      </Menu.Items>
                    </Transition>
          </div>
          )}
    </Menu>
  )
}
