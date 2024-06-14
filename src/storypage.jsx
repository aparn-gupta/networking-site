import React from 'react'
import Storydata from './StoryData'
import ReactPlayer from "react-player";
import { Avatar } from '@mui/material';
import Indistory from './IndiStory';
import { useParams } from 'react-router-dom';
// import { IdContext } from "./IndiStory";
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useridContext } from './MainComponent';
import { userData } from './userComponents/userData';



const Storypage = () => {


  let myId = useParams()
 
  // let myId = JSON.parse(localStorage.getItem("myId"))
  let reqdStory = {}


 for (let each of Storydata) {
  if (each.id === parseInt(myId.id)) {
    reqdStory = each

  }
 }  



 let storyplus = reqdStory.id + 1
 let storyminus = reqdStory.id - 1
 
 if (parseInt(myId.id) === Storydata[0].id ) {  
  storyminus = reqdStory.id
 }

 if (parseInt(myId.id) === Storydata[Storydata.length - 1].id ) {
  storyplus = reqdStory.id
 }




  return (
    <div className='bg-slate-700 pt-16 relative '>
     <Link to= "/"> <KeyboardBackspaceIcon className='absolute left-5 top-20 text-white'/>  </Link>
     <Link to={`/stories/${storyminus}`} > <ArrowBackIosNewIcon sx = {{width: "2.5rem", height: "3rem"}}  className='absolute top-1/2 left-80 p-1 bg-slate-600 text-slate-700 rounded-full'/> </Link>
        <div className='h-screen flex justify-center '> 
      
       <div  className=' flex justify-between relative  w-1/3 h-176  '>
       <div className='absolute top-5 left-5 flex'><Link to= {`/users/${reqdStory.userId}`}> <div className='flex'>  <Avatar className=' ring-4 ring-pink-600 ' src= {reqdStory.src} /> <p className='  text-white font-bold mx-4  text-lg' > {reqdStory.name}  </p> </div> </Link></div>  
         {reqdStory.imagesrc &&  <img  className='w-full h-160 ' src= {reqdStory.imagesrc} /> }   {reqdStory.url &&  <ReactPlayer  width="400px" height="630px" url= {reqdStory.url}/>}
        
         </div> 
        
        
         </div>
        <Link to= {`/stories/${storyplus}`}>  <ArrowForwardIosIcon sx = {{width: "2.5rem", height: "3rem"}}  className='absolute top-1/2 right-96 p-1 bg-slate-600 text-slate-700 rounded-full'/> </Link>
      
    </div>
  )
}

export default Storypage
