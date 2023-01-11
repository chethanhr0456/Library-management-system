import { Link } from "react-router-dom";
import "../styles/usernavbar.css"
const UserNavbar = () => {
    return ( 
        <div className="usernavbar">
        <div className="portal">
         <li  type="none"><Link>UserPortal</Link></li>
            <img height="50" src="/images/usericon.png" alt="" />
        </div>
        <div className="list">
            <ul type="none" >
                <li><Link to="/user/">Dash Board</Link> </li>
                <li><Link to="/user/book-list">Book List</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    </div>
     );
}
 
export default UserNavbar;