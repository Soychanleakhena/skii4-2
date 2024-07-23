import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./styles/App.css";

export default function Root() {
  return (
     <div id="container">
         <div className="header">
       
          </div>
          
         <div className="main">
         <div className="Sidebar"><Sidebar /></div>
         
         <div id="detail"><Outlet /></div>
        </div>
        
       
      </div>
   
  );
}



