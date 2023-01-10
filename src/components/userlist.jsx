import { useEffect,useState } from "react";
import '../styles/userlist.css'
const UserList = () => {
let [user,setuser]=useState([])
useEffect(()=>{
    let fetchdata= async()=>{
        let response= await fetch("http://localhost:5000/users")
        let data= await response.json()
        setuser(data)
    }
    fetchdata()
    
},[])
let remove=(id,name)=>{
    setuser(user.filter(x=>x.id!=id))
    alert(`${id,name} has been removed`)
}

    return ( 
        <div className="userlist container">
                <h1>User List</h1>
                <h1> Number of Users{user.length}</h1>
                <div className="user_section">
                    {user.map((x)=>(
                        <div className="user_list">
                            <h1>Name: {x.name}</h1>
                            <h1>Age: {x.age}</h1>
                            <h1>Email: {x.email}</h1>
                            <h1>PhoneNumber:{x.phonenumber}</h1>
                            <div className="button_tag">
                                <button onClick={()=>{remove(x.id,x.name)}}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
     );
}
 
export default UserList;