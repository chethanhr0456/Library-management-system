import AdminNavbar from "./adminnavbar";
import { Routes,Route } from "react-router-dom";
import AdminDashboard from "./admindashboard";
import BookList from "./booklist";
import UserList from "./userlist";
import ReadBook from "./readbook";
import AddUsers from "./addusers";
import AddBook from "./addbooks";

const AdminHomePage = () => {
    return (  
        <div className="adminhomepage">
       <AdminNavbar/>
       <Routes>
        <Route path="/"   element={<AdminDashboard/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/user-list" element={<UserList/>}/> 
        <Route path="/book-list/:id" element={<ReadBook/>}/>  {/* here for the read book based on id we are mentioning so :id is written */}
        <Route path="/add-users" element={<AddUsers/>} />
        <Route path='/add-book' element={<AddBook/>}/>
       </Routes>


        </div>
    );
}
 
export default AdminHomePage;