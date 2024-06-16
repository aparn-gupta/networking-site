import React, { useContext } from 'react'
import { useState } from 'react';
import EmotionPostform from './PostformwithEmotion';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { feelingformContext } from './InputBox';

export const emotionformContext = React.createContext()


const Feelingform = () => {

    const [selectedEmotion, setSelectedEmotion] = useState(null)
    const [formWithEmotionStyling, setFormWithEmotionStyling] = useState("false")
    const [isShowingfFeelingForm, setIsShowingFeelingForm] = useContext(feelingformContext)

    let styling = {display: "none"}

    if (formWithEmotionStyling === "true") {
        styling = {display: "block"}

     }

     else if (formWithEmotionStyling === "false")  {
        styling = {display: "none"}

    } 



  

   
    const handleClick = () => {
        if (selectedEmotion) {
            setFormWithEmotionStyling("true")
        }

    }

    const handleClickforBack = () => {
        setIsShowingFeelingForm(prev => !prev)

    }



//     const handleSubmit = () => {        
        
//     }


//     const [isShowing, setIsShowing] = React.useContext(formContext)
    

 
   
   
//    const handleClick = () => {  
//     setIsShowing(prev => !prev)     
//      } 



const emotions = ["happy", "sad", "enthusiastic", "disgusted", "excited", "angry", "loved", "nostalgic", "appreciated", "disappointed", "awed", "hopeful"]


  return (

  
  
        <div className='popup' >

        <emotionformContext.Provider value={ [formWithEmotionStyling, setFormWithEmotionStyling]}>

        <div className='flex justify-between'>
        <KeyboardBackspaceIcon className='text-white' onClick={handleClickforBack} />   
        <h1 className='text-lg font-bold mb-6 mr-16'>  How are you feeling today? </h1>
        </div>
       
       
       <form> 
         
            <div className=' flex justify-center'>
            <div>
            { emotions.map(item => 
                 <div className='w-56 flex justify-between'> <label htmlFor = 'emotions' className='capitalize'  >  {item} </label> <input  onChange={() => setSelectedEmotion(item) }   type='radio' id= 'emotions' name = 'emotions' className='w-4 h-4' /></div>
             )}
            </div>
            </div>

             <div className='bg-pink-800 text-white font-bold w-20 flex justify-center mt-10' onClick={handleClick}> Submit  </div>   

       </form>
       
       <div style={styling}> <div className='screenbox'> <EmotionPostform feeling = {selectedEmotion} />  </div>  </div>
      
       </emotionformContext.Provider>
            
     
      
    </div>
  
  
   
  )
}

export default Feelingform
