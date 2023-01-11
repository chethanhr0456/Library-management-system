import { useEffect, useState } from "react";
import '../styles/booklist.css'

import { useNavigate,Location, useLocation } from "react-router-dom";
const BookList = () => {
    let [books, setbooks] = useState([])

    let location=useLocation()  // 11/01/2023--this for fetch to route value and to display the delete button only in the admin book list
   
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch("http://localhost:5000/books")
            let data = await response.json()
            setbooks(data)
        }
        fetchdata()
    }, [books])
    let remove = (id, title) => {  //deleting book permenanentlyy
        fetch(` http://localhost:5000/books/${id}`,{
            method:"DELETE"
        });
        alert(`${title} will be removed permanently`)
       }
       let navigate=useNavigate()

       let read = (id,title)=>{   //this is for reading the books on the particular id number
    //    <ReadBook data={id}/>
       if (location.pathname == '/admin/book-list') {
        navigate(`/admin/book-list/${id}`)//---->this shouldbe given
       } else {
        navigate(`/user/book-list/${id}`)    //11/01/2023
       }
    }
    return (
        <div className="booklist_container ">
           <div className="content_text">
           <h1>Book List</h1>
            <h2> Number Of Books:{books.length}</h2>
           </div>
            <div className="books_section">
                {books.map((data) => (
                    <div className="book_list">
                        <div className="booklist_image">
                            <img  height="150" width="150" src={data.thumbnailUrl} alt="" />
                        </div>
                        <div className="booklist_information">
                            <h1>Title:{data.title}</h1>
                            <h1>Authors:{data.authors}</h1>
                            <h4 style={{ color: "red" }} >pageCount:{data.pageCount}</h4>
                            <h3>Categories:{data.categories}</h3> 
                            <div className="button_tag">
                            <button onClick={()=>{read(data.id, data.title)}}>ReadMore</button> 
                            {location.pathname=='/admin/book-list' && <button onClick={() => { remove(data.id, data.title) }} >Not Interested</button>} {/* 11/01/2023 this is for displaying delete button only in the admin book list not in user book list  */}
                        </div>
                        </div>
                       
                    </div>
                  ))}

            </div>
           
        </div>
    );
}

export default BookList;