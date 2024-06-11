import { Avatar } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { formContext } from './InputBox';
import { useState } from 'react';
import Postform from './postform';
import EmotionPostform from './PostformwithEmotion';


export const emotionContext = React.createContext()


const Feelingform = () => {

    const [selectedEmotion, setSelectedEmotion] = useState(null)
    const [formWithEmotionStyling, setFormWithEmotionStyling] = useState({display: "none"})
    const handleClick = () => {
        if (selectedEmotion) {
            setFormWithEmotionStyling({display: "block"})
        }

    }



//     const handleSubmit = () => {        
        
//     }


//     const [isShowing, setIsShowing] = React.useContext(formContext)
    

 
   
   
//    const handleClick = () => {  
//     setIsShowing(prev => !prev)     
//      } 



const emotions = ["happy", "sad", "enthusiastic", "disgusted", "excited", "angry", "loved", "nostalgic", "appreciated", "disappointed", "awed", "hopeful"]


  return (
    <emotionContext.Provider>
        <div className='popup' >
       
       <form> 
           <h1 className='text-lg font-bold mb-6 flex justify-center'>  How are you feeling today? </h1>
            <div className=' flex justify-center'>
            <div>
            { emotions.map(item => 
                 <div className='w-56 flex justify-between'> <label htmlFor = 'emotions' className='capitalize'  >  {item} </label> <input  onChange={() => setSelectedEmotion(item) }   type='radio' id= 'emotions' name = 'emotions' className='w-4 h-4' /></div>
             )}
            </div>
            </div>

             <div className='bg-pink-800 text-white font-bold w-20 flex justify-center mt-10' onClick={handleClick}> Submit  </div>   

       </form>
       <div style={formWithEmotionStyling}> <div className='screenbox'> <EmotionPostform feeling = {selectedEmotion} />  </div>  </div>

      
            
     
      
    </div>
    </emotionContext.Provider>
   
  )
}

export default Feelingform
