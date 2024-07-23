import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css"

function Sidebar() {
  return (
    <div id="Sidebar">
     
      <nav>
        <ul>
          <li>
            <NavLink to="/crop">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/croptype">CropType</NavLink>
          </li>
        
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;