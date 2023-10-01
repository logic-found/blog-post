import "./NavBar.css";
import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-social-icon">
            <div>
                <i className="navbar-social-icons fa-brands fa-square-facebook"></i>
                <i className="navbar-social-icons fa-brands fa-square-twitter"></i>
                <i className="navbar-social-icons fa-brands fa-square-instagram"></i>
                <i className="navbar-social-icons fa-brands fa-square-pinterest"></i>
            </div>
            
        </div>
        <div className="navbar-content">
            <a href="/" className="navbar-a">HOME</a>
            <a href="/about" className="navbar-a">ABOUT</a>
            <a href="/writePost" className="navbar-a">WRITE</a>
            <a href="/register" className="navbar-a">REGISTER</a>
            <a href="/login" className="navbar-a">LOGIN</a>
        </div>
        <div className="navbar-search">
            <div>
                <img className="navbar-search-profileImg" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80" alt="hyy" />
                
            </div>
            <i className="navbar-search-img fa-solid fa-magnifying-glass"></i>
                
            
        </div>
    </div>
  );
}
