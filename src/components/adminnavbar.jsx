import { Link } from "react-router-dom";
import '../styles/adminnavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminnavbar">
            <div className="portal">
             <li  type="none"><Link>AdminPortal</Link></li>
                <img height="50" src="/images/adminicon.jpg" alt="" />
            </div>
            <div className="list">
                <ul type="none" >
                    <li><Link to="/admin/">Dash Board</Link> </li>
                    <li><Link to="/admin/add-book">Add Books</Link> </li>
                    <li><Link to="/admin/add-users">Add users</Link></li>
                    <li><Link to="/admin/book-list">Book List</Link></li>
                    <li><Link to="/admin/user-list">User List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default AdminNavbar;