import {Routes,BrowserRouter,Route} from "react-router-dom"
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import 'tachyons'
import Addlist from "./pages/Addcontact";
import View from "./pages/View";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Navigation from "./Navigation/Navigation";
import Protected from "./Authentication/Protected";
import Success from "./Success/Success";
import Update from "./Success/Update";
import UserHome from "./Home/UserHome";
import Dashboard from "./pages/Dashboard";



function App() {
  return (
    <div className="">
   
    <BrowserRouter>
    <Navigation/>
    <ToastContainer position='top-center'/>
 
    <Routes>
    <Route path="/" element={<UserHome/>} />
    <Route path="/signin" element={<Signin/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/:id" element={<Dashboard/>} />
    

    <Route element={<Protected/>}>
    <Route path="/success" element={<Success/>} />
    <Route path="/update" element={<Update/>} />
    <Route path="/home/:id" element={<Home/>} />
    <Route path="/addcontact" element={<Addlist/>} />
    <Route path="/update/:id" element={<Addlist/>} />
    <Route path="/view/:id" element={<View/>} />
        </Route>
    </Routes>
    
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
