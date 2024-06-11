import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'

import { userData } from './userComponents/userData';
import { useridContext } from './MainComponent';



const Post = (props) => {

  const [liked, setLiked]  = useState(false)

const icon = liked ? <ThumbUpIcon/> : <ThumbUpAltOutlinedIcon/>

const numberOfLikes = liked ? parseInt(props.likes) + 1 : props.likes


const handleClick = () => {
  setLiked(prev => !prev)   

}  


const [userCommentData, setUserCommentData] = useState(null)
const [userComment, setUserComment] = useState("")
const [showUserComment, setShowUserComment] = useState({display: "none"})

const handleSubmit = (e) => {
    e.preventDefault()   
    
    setUserCommentData(null)
    if (userCommentData) {
      setShowUserComment({display : "block"})
      setUserComment(userCommentData)
    }
   

}

const handleChange = (e) => {
  setUserCommentData(e.target.value)

}

let currentUser = {}
const [selfId, setSelfId] = React.useContext(useridContext)

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each


    }
  }




  return (
    <div className='w-full  mx-3 p-4  rounded-2xl my-6  bg-white shadow-lg border-2 border-slate-200'>
        <Link to = {`/users/${props.userId}`} > <div className='flex'> <Avatar src={props.src} className='m-1' /> <div className='px-3 flex flex-col'> {props.name}   <div className='text-slate-500 text-xs' > {props.time} </div>   </div> </div>   </Link>
        <div className='py-3'> {props.text} </div>
       
       { props.imagesrc && <div className='py-2'> <img className='w-full h-112' src= {props.imagesrc}/> </div>}
        <div className='h-6 px-3 py-1 ' > <RecommendIcon className='text-blue-800'  /> {numberOfLikes}  </div>
        <div className='flex justify-between w-full h-10 px-2 py-2  '>
           
            <div onClick={handleClick}>   <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem',  }}> <div className='flex text-blue-600'>  {icon} <p className='mx-1'> Like </p> </div>  </Button> </div>
            <div>  <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem',}}> <ChatBubbleOutlineOutlinedIcon  className='text-slate-500 mx-1 font-bold' /> Comment   </Button> </div>
            <div>  <Button variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem' }}> <ShareOutlinedIcon  className='text-slate-500 mx-1 font-bold' /> Share   </Button> </div>

        </div>

        <div style = {showUserComment} > 
       <div className='flex'>
       <Avatar className='mr-3 mt-5' src='https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg' /> 
       <p  className='mt-5 bg-slate-300 rounded-3xl py-3 px-4 leading-tight text-sm w-full'> {userComment}   </p> 
       </div>
           </div>  

        <div className='flex my-4'>  <Avatar className='ml-8 mr-3 mt-2' src= {currentUser.pfpSrc} /> 
         <div className='flex justify-between'>
          <form onSubmit={handleSubmit}> 
          <input   value={userCommentData} onChange={handleChange} className='rounded-xl w-96 bg-slate-200 p-4' type='text' placeholder='Write a public comment' /> 
         <button type='submit'>  <SendIcon sx = {{color: 'gainsboro', marginLeft: '0.3rem', marginTop: '0.5rem' }} />  </button>
          </form>
            </div>
         
         </div>







           

      
    </div>
  )
}

export default Post
