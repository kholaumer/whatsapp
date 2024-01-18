import React, { useState } from 'react'
import Header from './Header'
import Search from './Search'
import Contacts from './Contacts'
import {data} from './data'

const Sidebar = () => {
  
  const [darkMode,setDarkMode] = useState(false);
  

  return (
    <>
    <div className={`col-3 bg-light ${darkMode && 'bg-dark text-white' }`} style={{
        height:'100vh'
        
        }}>
     <Header darkMode={darkMode} setDarkMode={setDarkMode} />
     <Search/>
     <Contacts/>
     <div className='whatsapp'> 
         {data.map((item) =>{
         return(
          <>
          <Contacts {...item} key={item.id}/>
          </>
         )
        })}
     </div>
  
    </div>
    
    </>
  )
}

export default Sidebar