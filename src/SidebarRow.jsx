import React from 'react'



const SidebarRow = (props) => {
  return (
    <div className=' p-6 hover:bg-slate-100 w-80 '>
      

      

      
        <div className='flex h-3 font-semibold'>  
         {props.icon}  
        {props.photo} 

       {props.photo &&  <p className='px-6'>  {props.title} </p>}
       {props.icon &&  <p className='px-8'>  {props.title} </p>}


       </div>
    

      
    </div>
  )
}

export default SidebarRow