import React from 'react'
import { Avatar, Button } from '@mui/material'
import Intro from './userComponents/Intro'
import Photos from './userComponents/Photos'
import Friends from './userComponents/Friends'
import LifeEvents from './userComponents/LifeEvents'
import InputBox from './InputBox'
import Post from './Post'
import { userData } from './userComponents/userData'
import { useParams } from 'react-router-dom'

const User = () => {

  let userId = useParams()
  console.log(userId)

  let indiUser = {}

  for (let each of userData)  {
    if (each.userId === parseInt(userId.userid)) { 
      indiUser = each


    }

  }

  let userself = true

  



  // let indiUser = userData[0]


  return (
    <div className='px-44'>




        
      <div className='h-144 relative'>
      <img className='w-full h-96 rounded-xl' src = {indiUser.coverpicsrc} />

      <div className='flex '>  
        <Avatar  sx = {{width: '12rem', height: '12rem'}} className='border-solid  border-4 border-white absolute bottom-10 left-11' src= {indiUser.pfpSrc}/> 

        <div className='ml-16 py-7 w-80'>           
            <p className='text-3xl font-bold my-3'> {indiUser.username} </p>
            <p className='text-lg text-slate-400 font-bold'> {indiUser.friendsCount} friends </p>
        </div>

        { !userself &&  
        <div className='flex py-20 '>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue', width: '9rem' }}> Add to story </Button> </div>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '9rem' }}> Edit Profile </Button> </div>
          <div className='ml-1 mr-10'> <Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '3rem' }}> ... </Button> </div>
        </div>
        }

        {userself && 
      <div className='flex py-20 '>
        <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue', width: '9rem' }}> Message </Button> </div>
        <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '9rem' }}> Friends </Button> </div>
        <div className='ml-1 mr-10'> <Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '3rem' }}> ... </Button> </div>
      </div> }
       
      </div>

     <div className='flex p-10'>
     <div className='w-2/5'>
          <Intro />
          <Photos />
          <Friends />
          <LifeEvents />
          
      </div>

      <div className='w-3/5'>
      <InputBox/>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      </div>
     </div>


    
       </div>
      

       
      
      
    

      
    </div>
  )
}

export default User
