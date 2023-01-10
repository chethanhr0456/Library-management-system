import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addbook.css"
const AddBook = () => {
    let[title,settitle]=useState("")
    let[authors,setauthors]=useState("")
    let[categories,setcategories]=useState("")
    let[pageCount,setpageCount]=useState("")
    let[shortDescription,setshortDescription]=useState("")
    let[longDescription,setlongDescription]=useState("")
    let[thumbnailUrl,setthumbnailUrl]=useState("")
    let navigate=useNavigate()

    let handleclick=(e)=>{
        e.preventDefault()
        let data={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

        fetch("http://localhost:5000/books",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        
        alert(`books added sucessfully`)
        navigate(`/admin/book-list`)
    }
    return ( 
        <div className="addbooks">
            <h1 style={{margin:"0px" ,color:"red",textAlign:"center"}} >ADD BOOKS</h1>
            <div className="book_forms" onSubmit={handleclick}>
                <form action="" >
                <div className="title">
                    <label htmlFor="title">Title *</label> <br />
                    <input name="title" type="text" placeholder="title of the book" required value={title} onChange={(e)=>{settitle(e.target.value)}} />
                </div>
                <div className="authors">
                    <label htmlFor="">Authors *</label> <br />
                    <input type="text" placeholder="book author" required value={authors}  onChange={(e)=>{setauthors(e.target.value)}}  />
                </div>
                <div className="categories">
                    <label htmlFor="">Categories *</label> <br />
                    <input type="text" placeholder="enter the categories" required  value={categories}  onChange={(e)=>{setcategories(e.target.value)}} />
                </div>
                <div className="pageCount">
                    <label htmlFor="">PageCount *</label> <br />
                    <input type="number" placeholder="enter page count" required value={pageCount}  onChange={(e)=>{setpageCount(e.target.value)}}  />
                </div>
                <div className="shortDescription">
                    <label htmlFor="">ShortDescription *</label> <br />
                    <textarea name="shortDescription" id="" cols="30" rows="1" placeholder="shortDescription" value={shortDescription}  onChange={(e)=>{setshortDescription(e.target.value)}} ></textarea>
                </div>
                <div className="longDescription">
                    <label htmlFor="">LongDescription *</label> <br />
                    <textarea name="longDescription" id="" cols="40" rows="10" placeholder="longDescription" value={longDescription}  onChange={(e)=>{setlongDescription(e.target.value)}} ></textarea>
                </div>
                <div className="thumbnailUrl">
                    <label htmlFor="">thumbnailUrl *</label> <br />
                    <input type="text" placeholder="enter thumbnail" required  value={thumbnailUrl}  onChange={(e)=>{setthumbnailUrl(e.target.value)}} />
                </div>
                <div className="addbooks_button">
                <button>AddBook</button>
                </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;