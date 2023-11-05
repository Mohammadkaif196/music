import React from "react";
import "./sidebar.css";
import user from "../assets/user.png"
import fav from "../assets/fav.png"
import search from "../assets/search.png"
import home from "../assets/home.png"
import addlist from "../assets/addlist.png"


 function Sidebar() {
  return <div className="sidebar-container">
   
  <img src={user} alt="img" className="sidebar-iconuser"/>
    <div class="sidebarcon">
  <img src={home} alt="img" className="sidebar-icon"/>

  <img src={search} alt="img" className="sidebar-icon"/>

  <img src={fav} alt="img" className="sidebar-icon"/>
  <img src={addlist} alt="img" className="sidebar-icon"/>


  </div>
  </div>;
}
export default Sidebar;
