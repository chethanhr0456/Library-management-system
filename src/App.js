import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landingpage from './components/landingpage';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin';
import AdminHomePage from './components/adminhomepage';
import UserHomePage from './components/userhomepage';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route   path='/admin-login' element={<AdminLogin/>}  />
      <Route  path='/user-login'   element={<UserLogin/>}/>
      <Route   path='/admin/*'     element={<AdminHomePage/>}/> 
      <Route    path='/user/*'     element={<UserHomePage/>}/>
      
      </Routes>
     </BrowserRouter>
      

    </div>
  );
  
}

export default App;
