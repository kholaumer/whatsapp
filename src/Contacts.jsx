import React from 'react'
import './styles.css';

const Contacts = ({n,pic,txt}) => {
  return (
    <>
    
      <div className='numbers '>
        <div className='image'>
       <img width="80px" src={pic} />
       </div>
      <div className='text'>
      <h4>{n}</h4>
        <p>{txt}</p>
        
      </div>
        
      </div>
     
    </>
  ) 
}

export default Contacts