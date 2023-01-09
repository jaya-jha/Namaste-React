import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.jpg";
import user from "./assets/user.png";


  
// javascript funtion which returns react element 
// component composition
const HeaderComponent = () => {
  return (
    <div className="header">
    <img src={logo} className="logo" alt="logo"/>
    <input className="searchBox" type="text" placeholder="Search"/>
    <img src={user} className="user" alt="user"/>
    </div>
 );
};


 


const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);
