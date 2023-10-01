import React from "react";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-heading">ABOUT ME</div>

        <div className="sidebar-content">
          <img
            className="sidebar-content-img"
            src="https://images.unsplash.com/photo-1680539053400-8c2872c0777b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
            alt="image"
          />
          <div className="sidebar-content-div" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. ue eius
            minima natus debitis quae repellat porro eligendi? Voluptatem, id?
          </div>
        </div>

        <div className="sidebar-categories">
          <div className="sidebar-categories-title"> Categories </div>
          <div className="sidebar-categories-content">
            <ul className="sidebar-categories-left">
              <li>Life</li>
              <li>Music</li>
              <li>Style</li>
            </ul>
            <ul className="sidebar-categories-right">
              <li>Sport</li>
              <li>Tech</li>
              <li>Cinema</li>
            </ul>
          </div>
        </div>
        <div className="sidebar-followus">
          <div className="sidebar-followus-title"> Follow me</div>
          <div className="sidebar-followus-content">
            <i className="sidebar-social-icons fa-brands fa-square-facebook"></i>
            <i className="sidebar-social-icons fa-brands fa-square-twitter"></i>
            <i className="sidebar-social-icons fa-brands fa-square-instagram"></i>
            <i className="sidebar-social-icons fa-brands fa-square-pinterest"></i>
          </div>
        </div>
      </div>
    </>
  );
}
