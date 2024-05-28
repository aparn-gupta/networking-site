import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Groups from "./Groups";
import Market from "./Market";
import Gaming from "./Gaming";
import Videos from "./Videos";
import Stories from "./Stories";
import InputBox from "./InputBox";
import ReactPlayer from "react-player";


function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-200">
        <Navbar />
        <div className="flex  "> 
        <Sidebar/>
       
        <Stories />
       
        
         </div>
        
        

      </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/market" element={<Market />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>

    
    </BrowserRouter>
  );
}

export default App;
