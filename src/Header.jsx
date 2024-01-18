import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { TbCircleDashed } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";


const Header = ({ darkMode , setDarkMode }) => {
  return (
    <>
    <div className={`icons d-flex justify-content-between align-items-center p-2
     ${ darkMode && 'bg-dark  text-white'}`}>

    <div className="left">  
     <FaUserCircle cursor="pointer" size={40}/>
    </div>
     <div className="right d-flex gap-2">
     <TbCircleDashed onClick={() => setDarkMode(!darkMode)} cursor="pointer" size={25}/>
     <RiMessage2Fill cursor="pointer" size={25}/>
     <BsThreeDotsVertical cursor="pointer" size={25}/>
   </div>
    </div>
    </>
  )
}

export default Header