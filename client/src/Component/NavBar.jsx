import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../Store/auth";


const NavBar = () =>
{ 
  //fecthing value of login and logout
  const {isLoggedIn} = useAuth();

    return(
        <header>
            <div className="container nav-container">
                <div className="logo">
                    <NavLink to="/" >Web Page Mern</NavLink>
                </div>

                <nav>
                    <ul className="ul">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/service">Service</NavLink></li>
                        
                        {/* checking is user loggedin or not to toggle login and logout button */}
                        
                        {
                            isLoggedIn ? <li><NavLink to="/logout">LogOut</NavLink></li>  
                            :<>
                                <li><NavLink to="/register">SingUp</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                             </>
                        }
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;