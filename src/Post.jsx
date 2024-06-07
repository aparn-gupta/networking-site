import { Avatar } from '@mui/material'
import React from 'react'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import { Link } from 'react-router-dom';







const Post = (props) => {

  const [liked, setLiked]  = useState(false)
const icon = liked ? <ThumbUpIcon/> : <ThumbUpAltOutlinedIcon/>



  return (
    <div className='w-full  mx-3 p-4  rounded-2xl my-6  border-slate-300 border bg-blue-100'>
        <Link to = "/users/:userid"> <div className='flex'> <Avatar src={props.src} className='m-1' /> <div className='px-3 flex flex-col'> {props.name}   <div className='text-slate-500 text-xs' > {props.time} </div>   </div> </div>   </Link>
        <div className='py-3'> {props.text} </div>
       
       { props.imagesrc && <div className='py-2'> <img className='w-full h-112' src= {props.imagesrc}/> </div>}
        <div className='h-6 px-3 py-1 ' > <ThumbUpAltOutlinedIcon className='text-slate-500'  /> {props.likes}  </div>
        <div className='flex justify-between w-full h-10 px-20 py-2  '>
            <div className='text-blue-800' onClick={() => {setLiked(prev => !prev)}} > {icon}    Like  </div>
            <div>  <ChatBubbleOutlineOutlinedIcon  className='text-slate-500' /> Comment </div>
            <div>  <ShareOutlinedIcon  className='text-slate-500' /> Share  </div>

        </div>

        <div className='flex justify-between my-4'>  <Avatar className='ml-10' src='https://i.pinimg.com/originals/a4/60/14/a46014e6b16f2b2b2d3c4cec127711ec.jpg' />  <input className='rounded-xl w-5/6 bg-slate-200 px-3' type='text' placeholder='Write a public comment'  /> </div>







           

      
    </div>
  )
}

export default Post
