import { useState } from "react";
import { useNavigate } from "react-router-dom";
import'../styles/adduser.css'
const AddUsers = () => {
 
    let[name,setname]=useState("")
    let[age,setage]=useState("")
    let[email,setemail]=useState("")
    let[phonenumber,setphonenumber]=useState("")
    let navigate=useNavigate()

    let handleclick=(e)=>{
        e.preventDefault()

        let data={name,age,email,phonenumber}
        fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        alert(`user has been added`)
        navigate(`/admin/user-list`)
    }
    
    return ( 
        <div className="addusers">
            <h1 style={{margin:"0px" ,color:"red" ,textAlign:"center"}}>Add A New User</h1>
            <div className="adduser_form">
                <form action="" onSubmit={handleclick}>
                    <div className="name">
                        <label htmlFor="">Name *</label> <br />
                        <input type="text" placeholder="enter name" value={name}  onChange={(e)=>{setname(e.target.value)}} />
                    </div>
                    <div className="age">
                        <label htmlFor="">Age *</label> <br />
                        <input type="number" min='1' placeholder="enter age"  value={age}  onChange={(e)=>{setage(e.target.value)}}/>
                    </div>
                    <div className="email.">
                        <label htmlFor="">Email *</label> <br />
                        <input type="email" placeholder="enter email" value={email}  onChange={(e)=>{setemail(e.target.value)}} />
                    </div>
                    <div className="phonenumber">
                        <label htmlFor="">PhoneNumber *</label> <br />
                        <input type="tel" minLength='10' maxLength='10' placeholder="enter phone number" value={phonenumber}  onChange={(e)=>{setphonenumber(e.target.value)}} />
                    </div>
                    <div className="adduser_button">
                        <button>Add User</button>
                    </div>
                </form>
            </div>

        </div>
     );
}
 
export default AddUsers;