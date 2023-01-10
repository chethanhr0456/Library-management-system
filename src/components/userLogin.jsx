import { useNavigate } from "react-router-dom";
import '../styles/userLogin.css'
const UserLogin =()=>{
    let navigate=useNavigate()
    let handleclick=()=>{
        navigate('/user/')
    }

    return(
        <div className="userLogin">
        <div className="form"  >
            <h2>Sign In As User</h2>
          <div className="form_input">
          <form action="" onSubmit={handleclick} >
           <div className="email">
           <label htmlFor="">Email:</label>
            <input type="email" placeholder="enter the email" required />
            </div>
            <div className="password"> <br />
            <label htmlFor="">Password:</label>
            <input type="password" placeholder="enter password" required  />
            </div> <br />
            <button>Login</button>
        </form>
          </div>
        </div>
    </div>
    )
}
export default UserLogin;