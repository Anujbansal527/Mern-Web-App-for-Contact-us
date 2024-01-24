import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Service from "./Pages/Service";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import NavBar from './Component/NavBar';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Component/Footer';
import Logout from './Pages/Logout';
import AdminLayout from './Component/layouts/AdminLayout';
import AdminUsers from './Pages/AdminUsers';
import AdminContacts from './Pages/AdminContacts';
import AdminUpdate from './Pages/AdminUpdate';




function App() {

 
  return (
   <BrowserRouter>
   <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/logout' element={<Logout/>} />
          <Route path='*' element={<ErrorPage/>} />

          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='users'  element={<AdminUsers/>}/>
            <Route path='contacts'  element={<AdminContacts/>}/>
            <Route path='users/:id/edit' element={<AdminUpdate/>}/>
          </Route>

      </Routes>
    <Footer/>
   </BrowserRouter> 
  )
}

export default App
