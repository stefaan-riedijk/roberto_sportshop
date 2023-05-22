import React from 'react'
import Button from "./Header_vantailwindsite";

function Header_metbuttonvantailwind({children}) {
  return (
    <div className="container flex py-3 px-4 w-full bg-blue-300 justify-between items-center" >
        <div>About</div>
        <Button />
        <div>Action</div>
    </div>
  )
}

export default Header_metbuttonvantailwind