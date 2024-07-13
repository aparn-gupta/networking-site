import React from 'react'
import Storydata from './StoryData'
import ReactPlayer from "react-player";
import { Avatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


import { userData } from './userComponents/userData';
import { useridContext } from './MainComponent';




const Storypage = () => {


  let myId = useParams()

  let reqdStory = {}


  let usersNewStory = JSON.parse(localStorage.getItem("newStory"))




//  for (let each of Storydata) {
//   if (each.id === parseInt(myId.id)) {
//     reqdStory = each

//   }
//  }  

let storyplus = Storydata[Storydata.length - 1].id
let storyminus = Storydata[0].id

for (let i = 0; i < Storydata.length; i++) {
  if (Storydata[i].id === parseInt(myId.id)) {
    reqdStory = Storydata[i]


    

    if (parseInt(myId.id) !== Storydata[Storydata.length - 1].id ) {
      storyplus = Storydata[i + 1].id
     }
    


    if (parseInt(myId.id) !== Storydata[0].id ) {  
      storyminus = Storydata[i - 1].id
     }
    

  }

}


let currentUser = {}
const [selfId, setSelfId] = React.useContext(useridContext)

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }


//  let storyplus = reqdStory.id + 1
//  let storyminus = reqdStory.id - 1



 




 
//  if (parseInt(myId.id) === Storydata[0].id ) {  
//   storyminus = reqdStory.id
//  }

//  if (parseInt(myId.id) === Storydata[Storydata.length - 1].id ) {
//   storyplus = reqdStory.id
//  }




  return (
    <div className='bg-slate-700 pt-16 relative '>
     <Link to= "/"> <KeyboardBackspaceIcon className='absolute left-5 top-20 text-white'/>  </Link>
     <Link to={`/stories/${storyminus}`} > <ArrowBackIosNewIcon sx = {{width: "2.5rem", height: "3rem"}}  className='absolute top-1/2 left-80 p-1 bg-slate-600 text-slate-700 rounded-full'/> </Link>
        <div className='h-screen flex justify-center '> 
      
       <div  className=' flex justify-between relative  w-1/3 h-176  '>
       <div className='absolute top-5 left-5 flex'><Link to= {`/users/${reqdStory.userId}`}> <div className='flex'>  <Avatar className=' ring-4 ring-pink-600 ' src= {reqdStory.src} /> <p className='  text-white font-bold mx-4  text-lg' > {reqdStory.name}  </p> </div> </Link></div>  
       <div className='absolute bottom-1/2 left-5 text-white font-bold text-4xl italic'>  {reqdStory.text} </div>
         {reqdStory.imagesrc &&  <img  className='w-full h-160' src= {reqdStory.imagesrc} /> }   {reqdStory.url &&  <ReactPlayer  width="400px" height="630px" url= {reqdStory.url}/>}
        
         </div> 
        
        
         </div>
        <Link to= {`/stories/${storyplus}`}>  <ArrowForwardIosIcon sx = {{width: "2.5rem", height: "3rem"}}  className='absolute top-1/2 right-96 p-1 bg-slate-600 text-slate-700 rounded-full'/> </Link>
      
    </div>
  )
}

export default Storypage
