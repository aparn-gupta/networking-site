import { Avatar } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { formContext } from './InputBox';
import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';




const EmotionPostform = (props) => {

    const handleSubmit = () => {        
        
    }


    const [isShowing, setIsShowing] = React.useContext(formContext)


    const [selfId, setSelfId] = React.useContext(useridContext)
    let currentUser = {} 
  
  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }
 
   
   
   const handleClick = () => {  
    setIsShowing(prev => !prev)     
     } 


  return (
    <div className='popup' >


       
       
        

        <div className=' flex justify-between mb-4 my-2'>    <h1 className='font-bold text-lg ml-28'>  Create New Post </h1>  <div  onClick={handleClick}  >  <CloseIcon />   </div>  </div>
 
        <div className='flex'>   <Avatar src= {currentUser.pfpSrc}  />   <div className='m-2 text-lg'>  {currentUser.username}  </div> 
        <div className='flex justify-center mt-2 text-lg'> is feeling <p className='text-yellow-400 font-bold mx-2 capitalize'>   {props.feeling} </p>today! </div> </div>
 
      
        
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

export default EmotionPostform
