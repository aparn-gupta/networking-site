import { Avatar } from '@mui/material'
import React from 'react'
// import IconButton from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { formContext } from './InputBox';




const Postform = () => {

    const handleSubmit = () => {        
        console.log("Yes")
    }


    const [isShowing, setIsShowing] = React.useContext(formContext)
    

 
   
   
   const handleClick = () => {  
    setIsShowing(prev => !prev)     
     } 


  return (
    <div className='popup' >
       
        

        <div className=' flex justify-between mb-5 my-2'>    <h1 className='font-bold text-lg ml-28'>  Create New Post </h1>  <div  onClick={handleClick}  >  <CloseIcon />   </div>  </div>
 
        <div className='flex'>   <Avatar src='https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg'  />   <div className='m-2'>  Ben  </div>  </div>
 
 
        
         <div className=''>
             <form onSubmit={handleSubmit}> 
            <div className='flex justify-between'>  <input className=  'border-slate-600 border p-2 m-5 h-44 w-80 ' placeholder="What's on your mind?"/>    </div>
             <input type='file' className='m-1' /> 
             <button type= "submit"  className='bg-pink-900 w-28 h-8  border border-red-500  text-white m-1' > Post   </button> 
             </form> 
          </div>
             
      
       
     </div>
   
  )
}

export default Postform
