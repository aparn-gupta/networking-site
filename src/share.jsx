import { Avatar } from '@mui/material'
import React, { useContext } from 'react'
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { shareformContext } from './Post';
import { Button } from '@mui/material'

const Share = (props) => {

  const [showShareBox, setShowShareBox] = useContext(shareformContext)


  const handleClick = () => {
    setShowShareBox(prev => !prev)



  }








  return (
  
     <div className='popup'>
      
     


      <div className='flex justify-between' >   <p className='text-lg font-bold ml-32'>  Share Post </p> <CloseIcon onClick = {handleClick}      />  </div>
      <div className=' mt-4 mb-6 flex font-bold' >   <Avatar src={props.src} /> <p className='ml-3'> {props.name}  </p> </div>

       {/* {props.imagesrc &&  <div className='flex justify-center mb-12'>  <img className='w-32 h-32' src= {props.imagesrc} />      </div>}
       {props.text && <div className='flex justify-center'> <p className='mt-5 mb-44'> {props.text} </p> </div>} */}

       <div className=' mb-4'>
       <form>  
     <div className='flex justify-center'>   <input  type='text' className='h-40 w-72 mb-12 p-2 bg-slate-300' placeholder='Say something about this'/> </div>
      <br/>
      <Button onClick = {handleClick}   sx={{backgroundColor: 'blue', textTransform: 'capitalize', color: 'white', width: '9rem', marginRight: '1.5rem'}}  > Share Now  </Button>  
    
      </form>
       </div>
     
      
     
     
     
     
   </div>
      
   
  )
}

export default Share
