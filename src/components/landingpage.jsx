import { Link } from "react-router-dom";
import '../styles/landingpage.css'

const Landingpage =()=>{

    return(
        <div className="landingpage">
           
           <div className="selectloginType">
                <h1>Library Management System</h1>
               <div className="totalinput">
              <div className="admin">
              <img height="100" src="/images/adminicon.jpg" alt="" /> <br /> <br />
                <Link to='/admin-login'>Admin Login</Link>
                 </div>
                <div className="user">
                <img height="100" src="/images/usericon.png" alt="" /> <br />  <br />
                <Link to='/user-login'>User Login</Link>
                </div>
               </div>
            </div>
        </div>
    )
}
export default Landingpage;