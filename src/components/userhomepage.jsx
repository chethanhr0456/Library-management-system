import { Routes,Route } from "react-router-dom";
import BookList from "./booklist";
import ReadBook from "./readbook";
import UserDashboard from "./userdashboard";
import UserNavbar from "./usernavbar";
const UserHomePage = () => {
    return ( 
        <div className="userhomepage">
            <UserNavbar/>
            <Routes>
        <Route path="/"   element={<UserDashboard/>}/>
        <Route path="/book-list"  element={<BookList/>} />
        <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>


        </div>
     );
}
 
export default UserHomePage;