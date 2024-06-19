import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Groups from "./Groups";
import Market from "./Market";
import Gaming from "./Gaming";
import Videos from "./Videos";
import Storypage from "./storypage";
import User from "./user";
import { useState } from "react";
import { userData } from "./userComponents/userData";


export const useridContext = React.createContext()



function MainComponent() { 





  const [usernameInput, setUsernameInput] = useState("")
  const [userpassword, setUserPassword] = useState("")
  const [passwordmatchMessage, setPasswordmatchMessage] = useState("")
  const [reqdUser, setReqdUser] = useState({})
  const [selfId, setSelfId] = useState(null)
  const [loggedin, setLoggedin] = useState(false)



  const formStyle = loggedin ? {display: "none"} : {display: "block"}



 

  const handleSubmit = () => {
   
    for (let each of userData) {
      if (each.username === usernameInput) {
        setReqdUser(each)
        setSelfId(each.userId)
      }     
    }

   


    if (userpassword !== reqdUser.password) {
      setPasswordmatchMessage("Incorrect credentials")
    }
    else if (userpassword === reqdUser.password) {     
      setLoggedin(prev => !prev)         
    } 
  }

 





    

  return (
    <div >   


        
      <BrowserRouter>

      <useridContext.Provider value={ [selfId, setSelfId] }> 

         <div style={formStyle}>
   <div className='loginscreenbox'>
    <div className='loginbox'>
       <form >
       
        <label htmlFor='username' > Username </label>
        <input className='w-60 h-8 border-2 p-1 border-slate-500 mb-4' name='username' placeholder = "Doctor Strange/Pikachu/Oswald" id = 'username' type='text' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value) }  />
        <br/>
        <label htmlFor='password'>Password </label>
        <input className='w-60 h-8 border-2 p-1 border-slate-500' placeholder = "abcd" name= 'password' id='password' type='password' value={userpassword} onChange={(e) => setUserPassword(e.target.value) }  />
       <div className=''>  <div  onClick={handleSubmit}  className='bg-pink-700 w-24 p-0.5 h-8 flex justify-center text-white border-2 border-pink-900 mt-6'> Submit </div> </div>
       <div className='text-red-600 w-40 mt-3'> {passwordmatchMessage} </div>    
       </form>      
    </div>
   </div>

 </div> 










    
    
    
    {/* <Login /> */}

        
        <div className="navbar">
          <Navbar />
      </div>

        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/market" element={<Market />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/stories/:id" element={<Storypage />} />
          <Route path="/users/:userid" element={<User />} />
          

        </Routes>

       
        </useridContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
