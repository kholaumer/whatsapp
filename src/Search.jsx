import React from 'react'
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <> 
    <div className='border'>

    <div className=" d-flex align-items-center mt-2 p-1 ">
    <IoSearch/>
    <input type="search" placeholder='Search or start new chat' className='form-control bg-light border-0' />
    </div>
    
    </div>
    </>
  )
}

export default Search