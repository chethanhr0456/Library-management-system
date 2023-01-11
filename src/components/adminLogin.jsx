import { useState } from "react"
import { useNavigate } from "react-router-dom"
import'../styles/adminLogin.css'
const  AdminLogin = () =>{
       let [email,setemail]=useState("")
       let[password,setpassword]=useState("")
       let navigate=useNavigate()  //this is for moving once we login 
    
    let handleclick = (e)=>{
          e.preventDefault()

          let data={email,password}

            //to admin validatiom
          if (email=="admin@gmail.com" && password== 1234) {
            navigate('/admin/')
          } else {
            alert(`Invalid credentials`)
          }
}

return(
        <div className="adminLogin">
            <div className="form"  >
                <h1>Sign In As Admin</h1>
              <div className="form_input">
              <form action="" onSubmit={handleclick}  >
               <div className="email">
               <label  htmlFor="">Email:</label> <br />
                <input type="email" placeholder="enter the email" required value={email}  onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="password"> <br />
                <label htmlFor="">Password:</label> <br />
                <input type="password" placeholder="enter password" required  value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div> <br />
                <button>Login</button>
            </form>
              </div>
            </div>
        </div>
    )
}
export default AdminLogin