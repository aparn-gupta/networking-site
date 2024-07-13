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
import Share from './share';

import { userData } from './userComponents/userData';
import { useridContext } from './MainComponent';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export const shareformContext = React.createContext()

















const Post = (props) => {

const [liked, setLiked]  = useState(false)

const [showCommentBox, setShowCommentBox] = useState(false)
const [showShareBox, setShowShareBox] = useState(false)

const commentboxstyle = showCommentBox ? {display: "block"} : {display: "none"}



const icon = liked ? <ThumbUpIcon/> : <ThumbUpAltOutlinedIcon/>

const numberOfLikes = liked ? parseInt(props.likes) + 1 : props.likes


const handleLikeButtonClick = () => {
  setLiked(prev => !prev)   

}  

const handleCommentButtonClick = () => {
  setShowCommentBox(prev => !prev)

}

const handleShareButtonClick = () => {
  setShowShareBox(prev => !prev)
}


const [userCommentData, setUserCommentData] = useState(null)
const [userComment, setUserComment] = useState("")

const [showUserComment, setShowUserComment] = useState({display: "none"})

const handleSubmit = (e) => {

    e.preventDefault() 
    
    
    if (userCommentData) {
      setShowUserComment({display : "block"})
      setUserComment(userCommentData)
    }
    setUserCommentData("")      

    setShowCommentBox(prev => !prev)
    
   

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


  const shareboxStyle = showShareBox ?  <div className='screenbox'>
     <Share src = {currentUser.pfpSrc}  name = {currentUser.username}  /> 
      </div> : null
  showShareBox ?  document.body.classList.add("stopscrolling") : document.body.classList.remove("stopscrolling")



   let usersNewStory = JSON.parse(localStorage.getItem("mypost"))

  const [showDeleteButton, setShowDeleteButton] = useState(false)


  const deletePost = () => {

      if (usersNewStory)  {
        localStorage.removeItem("mypost")
        window.location.reload()
      }
  }

  const deleteButton = showDeleteButton ? <button onClick = {deletePost} className="border-2 border-black p-2 bg-white"> Delete Post </button> : <div></div>

  const openMenu = () => {
    setShowDeleteButton(prev => !prev)


  }






  return (
    <shareformContext.Provider value={[showShareBox, setShowShareBox]}>
    <div className='w-full  mx-3 p-4  rounded-2xl my-6 relative bg-white shadow-lg border-2 border-slate-200'>
      {shareboxStyle}
        <Link to = {`/users/${props.userId}`} > <div className='flex'> <Avatar src={props.src} className='m-1' /> <div className='px-3 flex flex-col'> {props.name}   <div className='text-slate-500 text-xs' > {props.time} </div>   </div> </div>   </Link>
        <div className='py-3'> {props.text} </div>

        {  usersNewStory &&  props.userId === selfId &&  <div className="absolute top-5 right-4 text-black">  <MoreVertIcon  onClick = {openMenu} />  </div>}
        <div className="absolute top-12 right-3">  {deleteButton} </div>

        
        
       
       { props.imagesrc && <div className='py-2'> <img className='w-full h-112' src= {props.imagesrc}/> </div>}
        <div className='h-6 px-3 py-1 ' > <RecommendIcon className='text-blue-800'  /> {numberOfLikes}  </div>
        <div className='flex justify-between w-full h-10 px-2 py-4 mb-7 '>
           
            <Button onClick={handleLikeButtonClick} variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem', height: "2.5rem" }}> <div className='flex text-blue-600'>  {icon} <p className='mx-1'> Like </p> </div>  </Button> 
            <Button  onClick={handleCommentButtonClick}  variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem', height: "2.5rem"}}> <ChatBubbleOutlineOutlinedIcon  className='text-slate-500 mx-1 font-bold' /> Comment   </Button> 
           <Button onClick={handleShareButtonClick} variant='contained' sx={{ color: 'grey', backgroundColor: 'white', textTransform: 'capitalize', font: 'bold', width: '9rem', height: "2.5rem" }}> <ShareOutlinedIcon  className='text-slate-500 mx-1 font-bold' /> Share   </Button> 

        </div>

        <div style = {showUserComment} > 
       <div className='flex'>
       <Avatar className='mr-3 mt-5' src= {currentUser.pfpSrc} /> 
       <p  className=' bg-slate-300 rounded-xl py-3 px-4 leading-tight text-sm w-full my-3'> {userComment}   </p> 
       </div>
           </div>  

           <div style = {commentboxstyle}> 

           <div className='flex my-4'> 
         <Avatar className='ml-8 mr-3 mt-2' src= {currentUser.pfpSrc} /> 

         <div className='flex justify-between'>
          <form onSubmit={handleSubmit}> 
          <input  value={userCommentData} onChange={handleChange} className='rounded-xl w-96 bg-slate-200 p-4' type='text' placeholder='Write a public comment' /> 
         <button type='submit'>  <SendIcon sx = {{color: 'gainsboro', marginLeft: '0.3rem', marginTop: '0.5rem' }} />  </button>
          </form>
            </div>
         
         </div>
            
           </div>           

      
    </div>
    </shareformContext.Provider>
  )
}

export default Post
