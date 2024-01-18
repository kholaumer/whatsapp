import React from 'react'
import Sidebar from './Sidebar'
import Messages from './Messages'



const Home = () => {
  return (
    <>
    <div className="d-flex">

    <Sidebar/>
    <Messages/>
    
    </div>
    
    </>
  )
}

export default Home