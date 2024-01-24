import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Store/auth";


const AdminUpdate = () => {

  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  //fecthin parameteres from parameter of url
  const params = useParams();

  //fetchng token
  const {GlobalAuthToken} = useAuth();

  const getUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: GlobalAuthToken,
          },
        }
      );
      const data = await response.json();
      //console.log(data);

      //setting data on state
      setData(data);

    //   if (response.ok) {
    //     getAllUsersData();
    //   }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  },[]);

  const handler = (e) => {
    setData({...data, [e.target.name] : e.target.value})
  };

  //update the values data from forntent to backend
  const handelSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: GlobalAuthToken,
    },
    body:JSON.stringify(data),
  })

  console.log(response)
  alert("data updated")

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <section>
      <div className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Update User Data</h1>
        </div>

        <div className="container grid grid-two-cols"></div>

        <section className="section-form">
          <form onSubmit={handelSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={data.username}
                id="username"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                id="email"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
              />
            </div>

            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="phone"
                name="phone"
                value={data.phone}
                id="phone"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
              />
            </div>

            <br />
            <button type="submit" className="btn btn-submit">
              Update
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default AdminUpdate;
