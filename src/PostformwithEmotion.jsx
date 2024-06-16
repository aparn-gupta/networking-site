import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';

import { emotionformContext } from './Feelingform';
import { feelingformContext } from './InputBox';




const EmotionPostform = (props) => {

   

    const [formWithEmotionStyling, setFormWithEmotionStyling] = useContext(emotionformContext)
    const [isShowingfFeelingForm, setIsShowingFeelingForm] = useContext(feelingformContext)
    
    


   
    const handleClick = () => {
      console.log("pineapple")
      setFormWithEmotionStyling("false" )
       
          

    }

    const handleSubmit = (e) => { 
      e.preventDefault()
      setFormWithEmotionStyling("false" )  
      setIsShowingFeelingForm(prev => !prev)    
     
        
    }   


    const [selfId, setSelfId] = React.useContext(useridContext)
    let currentUser = {} 
  
  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }
 
   
   
 


  return (
    <div className='emoform' >


       
       
        

      <div >
      <div className=' flex justify-between mb-4 my-2'>    <KeyboardBackspaceIcon onClick={handleClick} className='text-white'/>   <h1 className='font-bold text-lg mr-40'>  Create New Post </h1>   </div>
 
 <div className='flex'>   <Avatar src= {currentUser.pfpSrc}  />   <div className='m-2 text-lg'>  {currentUser.username}  </div> 
 <div className='flex justify-center mt-2 text-lg'> is feeling <p className='text-yellow-400 font-bold mx-2 capitalize'>   {props.feeling} </p>today! </div> </div>


 
  <div className=''>
      <form onSubmit={handleSubmit}> 
     <div className='flex justify-center'>  <input className=  'border-slate-600 border p-2 m-5 h-44 w-96 ' placeholder="What's on your mind?"/>    </div>
      <div> <input type='file' className='m-1 justify-center' />  </div>
      <button type= "submit"  className='bg-pink-900 w-28 h-8  border border-red-500  text-white m-1' > Post   </button> 
      </form> 
   </div>
      
      </div>
      
       
     </div>
   
  )
}

export default EmotionPostform
