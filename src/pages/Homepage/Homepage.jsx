import React from "react";
import "./Homepage.css";
import Sidebar from '../../component/Sidebar/Sidebar'
import Header from '../../component/Header/Header'
import Posts from '../../component/Posts/Posts'
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="posts-and-sidebar">
        <Posts/> 
        <Sidebar/>
      </div>
    </>
  );
}
