import React, { useState } from 'react'
import { Avatar, Button } from '@mui/material'
import Intro from './userComponents/Intro'
import Photos from './userComponents/Photos'
import Friends from './userComponents/Friends'
import LifeEvents from './userComponents/LifeEvents'
import InputBox from './InputBox'
import Post from './Post'
import { userData } from './userComponents/userData'
import { useParams } from 'react-router-dom'
import { useridContext } from './MainComponent'
import OpenMessenger from './OpenMessenger'
import CheckIcon from '@mui/icons-material/Check';
import postdata from './postdata'
import UserMessenger from './UserMessenger'


export const showUserMessengerContext = React.createContext()


const User = () => {

  let userId = useParams()
 

  let indiUser = {}

  for (let each of userData)  {
    if (each.userId === parseInt(userId.userid)) { 
      indiUser = each


    }

  }

  let ownAcc = false


  const [selfId, setSelfId] = React.useContext(useridContext)

  if (selfId === parseInt(userId.userid)) {
    ownAcc = true

  }

  let poster = {}

  for (let entry of postdata) {
    if (entry.userId === parseInt(userId.userid)) {
      poster = entry
    }
  }





  const [isfriends, setIsFriends] = useState(true)
  const [friendtext, setFriendtext] = useState("")
  const [buttontext, setButtonText] = useState("Friends")




  const handleFriendsClick = () => {
    if (isfriends) {
      setFriendtext(<div onClick = {handleUnFriendClick} className='bg-blue-700 font-bold text-white p-4 mt-8 flex justify-center'> <p>  Unfriend {indiUser.username} ?  </p> </div> )

    }
    if (!isfriends) {
      setButtonText("Request Sent")
          }

   



   
  }



  const handleUnFriendClick = () => {
    setIsFriends(prev => !prev)
    setFriendtext(<div></div>)
    setButtonText("Add Friend")

  }

 
  




  const [showMessengerbox, setMessengerBox] = useState(false)

  let styling = showMessengerbox ? {display : "block"} :  {display : "none"} 


  



  // let indiUser = userData[0]


  return (

   


    <div className='px-44'>

<showUserMessengerContext.Provider value = {[showMessengerbox, setMessengerBox]}>

    

     <div style = {styling}>   <UserMessenger src = {indiUser.pfpSrc} username = {indiUser.username} /> </div>




        
      <div className='h-144 relative'>
      <img className='w-full h-96 rounded-xl' src = {indiUser.coverpicsrc} />

      <div className='flex '>  
        <Avatar  sx = {{width: '12rem', height: '12rem'}} className='border-solid  border-4 border-white absolute bottom-10 left-11' src= {indiUser.pfpSrc}/> 

        <div className='ml-16 py-7 w-80'>           
            <p className='text-3xl font-bold my-3'> {indiUser.username} </p>
            <p className='text-lg text-slate-400 font-bold'> {indiUser.friendsCount} friends </p>
        </div>

        { ownAcc &&  
        <div className='flex py-20 '>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'blue', width: '9rem' }}> Add to story  </Button> </div>
          <div className='mx-1'><Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '9rem' }}> Edit Profile </Button> </div>
          <div className='ml-1 mr-10'> <Button variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '3rem' }}> ... </Button> </div>
        </div>
        }

        {!ownAcc && 
      <div className='flex py-20 '>
        <div className='mx-1'><Button onClick={() => setMessengerBox(prev => !prev) } variant='contained' sx={{ color: 'white', backgroundColor: 'blue', width: '9rem' }}> Message </Button>
       </div>
        <div className='mx-1'><Button onClick={handleFriendsClick} variant='contained' sx={{ color: 'white', backgroundColor: 'rgb(162, 161, 161)', width: '9rem' }}> {buttontext} </Button>
        {friendtext}  </div>
       
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
      <Post 
      key = {poster.id}
      userId = {poster.userId}
      src = {poster.src}    
      name = {poster.name}
      time = {poster.time}
      text = {poster.text}
      imagesrc = {poster.imagesrc}
      likes = {poster.likes}/>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />

      </div>
     </div>


    
       </div>
      

       
      
       </showUserMessengerContext.Provider>
    

      
    </div>
  
  )
}

export default User
