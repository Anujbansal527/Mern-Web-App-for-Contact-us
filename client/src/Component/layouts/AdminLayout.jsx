import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaHome, FaRegListAlt, FaUser  } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../Store/auth";

const AdminLayout = () => {

  //validation for admin
  const {admin,loader} = useAuth();
  //console.log(user);

  console.log(admin)

  //establishing loader at page
  if(loader){
    return(<div>Loading.....</div>)
  }

  if(admin === "false"){
    return(<Navigate to="/"/>)
  }

  return (
    <>
      <header>
        <div className="admin-container">
          <nav>  
            <ul>
              <li>
                <NavLink to="/admin/users"><FaUser />Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts"><FaMessage />Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/service"><FaRegListAlt/>Service</NavLink>
              </li>
              <li>
                <NavLink to="/"><FaHome/>Home</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminLayout;
