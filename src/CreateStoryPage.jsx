import React from 'react'
import { useState } from 'react'
import { userData } from './userComponents/userData'
import { useridContext } from './MainComponent'
import { Link } from 'react-router-dom'


const CreateStoryPage = () => {
  const [photoSrc, setPhotoSrc] = useState("")
  const [showing, setISShowing] = useState(false)
  const [usertext, setUsertext] = useState("")

  const divStyle = showing ? {display: "block"} : {display: "none"}

  const handleFileSelect = (e) => {
    setISShowing(prev => !prev)
    let userFile = e.target.files[0]

    let reader = new FileReader()
    reader.onload = (e)  => {
      setPhotoSrc(e.target.result)
    }

    reader.readAsDataURL(userFile)
  }

  const handleChange = (e) => {
    setUsertext(e.target.value)
  } 

  const [selfId, setSelfId] = React.useContext(useridContext);
  let currentUser = {};

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each;
    }
  }

  let userNewStory = {
    id: 0,
    userId: currentUser.userId,
    src: currentUser.pfpSrc,
    imagesrc: photoSrc,
    name: currentUser.username,
    text: usertext,
    url : ""


  }

  const handleSubmit = () => {
    
    localStorage.setItem("newStory", JSON.stringify(userNewStory))
   



  }

   
  return (
    <div className='w-screen h-screen p-56'>
        <div className='flex justify-center'>
          
        <div className='w-72 h-96 mr-24 bg-gradient-to-br from-lime-500 to-purple-600 rounded-xl p-5 text-lg font-bold text-center' > <input type='file' onChange={handleFileSelect} className=''/> </div>
          
           {/* <div className='w-44 h-72 mr-24 bg-gradient-to-br from-lime-500 to-purple-600 rounded-xl p-5 text-lg font-bold text-center'>  Create Photo Story </div> */}
           
           
           
           
           
           
            {/* <div className='w-44 h-72  bg-gradient-to-br from-blue-500 to-pink-600 rounded-xl p-5 text-lg font-bold text-center'> Create text Story </div> */}

        </div>


        <div style={divStyle}>
        <div   className='w-192 h-144 bg-slate-400 top-24 right-40 shadow-2xl fixed z-50'>    
       <div className=''> 
         <div className='w-72 h-96 relative'> 
         <img src={photoSrc} className='w-72 h-96 rounded-2xl fixed left-1/2 top-56'  />
      <div className='absolute mx-64 my-44 flex justify-center w-64 '>  <p className=' text-3xl italic font-bold text-white  '> {usertext} </p>  </div> </div> 
        </div>
       
        </div>

        <div > 
          <div className=' absolute top-24 left-20'>
            <label htmlFor='addtext'className='font-bold text-lg' > Add Text</label>
            <br/>
            <input className='w-72 h-56 mt-6 p-8 border-black border-2'  id='addtext' name='addtext' value={usertext} onChange={handleChange} placeholder='' />
            <br />
           <Link to= "/">  <button  onClick={handleSubmit} className='w-24 h-12 bg-pink-600 mt-12 text-white font-bold'> Post </button> </Link>
          </div>
          
        </div>
      
    </div>

      
      
    </div>
  )
}

export default CreateStoryPage
