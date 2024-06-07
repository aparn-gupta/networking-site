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


function MainComponent() {

  
   
    

  return (
    <div >

    
        
      <BrowserRouter>
        <div >
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
      </BrowserRouter>
    </div>
  );
}

export default MainComponent;
