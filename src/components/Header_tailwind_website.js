import React from 'react'

function Header_tailwind_website() {
  return (
    <header className="bg-gray-800 py-4">

        
    <div className="container flex justify-between items-center mx-auto">
      <div className="text-white text-xl font-bold">My Website</div>


      <div className="mx-auto flex h-screen w-full items-center justify-center bg-gray-200 py-20">
        <div className="group relative cursor-pointer py-2">
            <div className="flex items-center justify-between space-x-5 bg-white px-4">
          <a
            className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4"
            onClick=""
          >
            Our Products
          </a>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
 
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Action
      </button>
    </div>


  </header>
  )
}

export default Header_tailwind_website