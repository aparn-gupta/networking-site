import { Avatar } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { formContext } from "./InputBox";
import { useridContext } from "./MainComponent";
import { userData } from "./userComponents/userData";
import postdata from "./postdata";
import { Link } from "react-router-dom";

const Postform = () => {
  const [createPostText, setCreatePostText] = useState();
  const [userImage, setUserImage] = useState();


  const handleChange = (e) => {
    setCreatePostText(e.target.value)
  };

  const handleFileSelect = (e) => {
    let myFile = e.target.files[0]

    let reader = new FileReader()
    reader.onload = (e) => {
      setUserImage(e.target.result)
    }

    reader.readAsDataURL(myFile)

  };

 



  const [isShowing, setIsShowing] = React.useContext(formContext);

  const [selfId, setSelfId] = React.useContext(useridContext);
  let currentUser = {};

  for (let each of userData) {
    if (each.userId === parseInt(selfId)) {
      currentUser = each;
    }
  }

let currentUserPosts = []


  let newPost = {
    id: 0,
    userId: currentUser.userId,
    src: currentUser.pfpSrc,
    name: currentUser.username,
    time: "15:30",
    text: createPostText,
    imagesrc: userImage,
    likes: 0

  }


  const handleSubmit = () => {
   
    setIsShowing((prev) => !prev);
    currentUserPosts.push(newPost)
    localStorage.setItem("mypost", JSON.stringify(newPost))
    window.location.reload()
    
    
    
  };

  

  const handleClick = () => {
    setIsShowing((prev) => !prev);
  };

  return (
    <div className="popup">
      <div className=" flex justify-between mb-5 my-2">
        {" "}
        <h1 className="font-bold text-lg ml-28"> Create New Post </h1>{" "}
        <CloseIcon onClick={handleClick} className="text-white" />{" "}
      </div>

      <div className="flex">
        {" "}
        <Avatar src={currentUser.pfpSrc} />{" "}
        <div className="m-2"> {currentUser.username} </div>{" "}
      </div>

      <div className="">
        <div >
          <div className="flex justify-between">
          
            <input
              className="border-slate-600 border p-2 m-5 h-44 w-80 "
              placeholder="What's on your mind?"
              value={createPostText}
              onChange={handleChange}
            />
          </div>
          <input
            type="file"
            className="m-1"
           
            accept="image/png, image/jpeg"
            onChange={handleFileSelect}
          />
         <Link to = "/" >  <button    
            className="bg-pink-900 w-28 h-8  border border-red-500  text-white m-1"
            onClick={handleSubmit}>      
            Post
          </button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Postform;
