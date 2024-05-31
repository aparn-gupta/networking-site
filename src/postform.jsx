import { Avatar } from '@mui/material'
import React from 'react'
// import IconButton from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';




const Postform = (props) => {

    const handleSubmit = () => {        
        console.log("Yes")
    }

  //   const [unblurring, setUnblurring] = useState({})
  //   const [isShowing, setIsShowing] =  useState(true)
   
  //  let formStyle = isShowing ? {display: "block"} :  {display: "none"}
   
   
  //    const filterblur = {
  //      opacity: 1
       
      
  //    }
   
   
   
   const handleClick = () => {   
      document.getElementById("myform").style.display = "none"  
      document.body.classList.remove("stopscrolling") 
      
      
      //  setIsShowing(prev => !prev)   
      //  setUnblurring(filterblur)     
     
     } 







  return (
    <div >
        <div id= "myform" className='h-96 w-96 border-slate-600 border p-4 bg-slate-400 bg-opacity-100'  >
       
        

        <div className='flex justify-between mb-5 '>  <h1 className='font-bold'>  Create New Post </h1>  <div  onClick={handleClick}  >  <CloseIcon />   </div>  </div>
 
        <div className='flex'>   <Avatar src='https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg'  />   <div className='m-2'>  Ben  </div>  </div>
 
 
        
         <div className=''>
             <form onSubmit={handleSubmit}> 
             <input className=  'border-slate-600 border p-2 m-5 h-40 w-72 ' placeholder="What's on your mind?"/>   
             <input type='file' className='m-1' /> 
             <button type= "submit"  className='bg-pink-900 w-28 h-8  border border-red-500  text-white m-1' > Post   </button> 
             </form> 
          </div>
             
      
       
     </div>
    </div>
  )
}

export default Postform
