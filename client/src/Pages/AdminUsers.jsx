import { useEffect, useState } from "react";
import { useAuth } from "../Store/auth";
import {Link} from "react-router-dom"

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const { GlobalAuthToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: GlobalAuthToken,
        },
      });

      const data = await response.json();

      //console.log(data);

      setUsers(data);
    } catch (error) {}
  };

  const deleteUser = async(id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: GlobalAuthToken,
    },
  })
  const data = await response.json();
  console.log(data);

  if(response.ok){
    getAllUsersData();
  }
    } catch (error) {
      console.log(error)
    }
}



  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin users</h1>
        </div>
        <div className="container admin-users">
          {
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
              {
              users.map((data, index) => {
                return(
                 <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td><Link to={`/admin/users/${data._id}/edit`}>Edit</Link></td>
                  <td><button onClick={()=>deleteUser(data._id)}>Delete</button></td>
                </tr>
                )
              })
              }
                
              </tbody>
              
            </table>
          }
        </div>
      </section>
    </>
  );
};
export default AdminUsers;
