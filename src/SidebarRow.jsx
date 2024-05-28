import React from 'react'



const SidebarRow = (props) => {
  return (
    <div className=' p-6 '>
      

      

      
        <div className='flex h-3'>  
        <div>  {props.icon}  </div>
        <div> {props.photo} </div>

        <p className='px-8'>  {props.title} </p> </div>
    

      
    </div>
  )
}

export default SidebarRow
