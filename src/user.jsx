import React from 'react'
import { Button } from '@mui/material'

const User = () => {
  return (
    <div className='px-44'>

        
      <div className='h-160 '>
      <img className='w-full h-112' src = "https://www.goodfreephotos.com/albums/other-landscapes/mountains-and-pond-landscape-with-majestic-scenery.jpg" />
      <div className='flex justify-between'>
      
       <div className='flex'>
       
       <img className='rounded-full w-48 h-48 border-solid  border-4 border-purple-500' src='https://cdn.suwalls.com/wallpapers/animals/cute-kitten-37952-2880x1800.jpg'/> 
            
            <div className='p-12'> 
            <p className='text-3xl font-bold my-3'> Kitty de Toodles </p>
            <p className='text-lg text-slate-400 font-bold'> 400 friends </p>
            </div>
       </div>

        <div className='flex py-20'>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue' }}> Add to story </Button> </div>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'grey' }}> Edit Profile </Button> </div>
         <div className='mx-1'> <Button variant='contained' sx={{ color: 'white', backgroundColor: 'grey' }}> ... </Button> </div>
          
        </div>


      </div>
      </div>
      
    </div>
  )
}

export default User
