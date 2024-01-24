import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  //navigation hook

  const navigate = useNavigate();

  //accessing authContext to access token
  const { setTokenInLS } = useAuth();

  const handler = (e) => {
    setUser({
      ...user, //preveious state getting using spread operator
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //empty the object
      if (response.ok) {
        //auth token store client storage for authentication
        //fetching response data in the form of json
        const res_data = await response.json();
        //using conntex api to access this funtion to store and fecth data
        setTokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        //navigating to login page
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
          
          <div className="registration-image">
                <img src="" alt="reigister imagse" width="500" height="500"/>
              </div>

              <div className="registration-form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />
              <form onClick={(e) => handelSubmit(e)}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    placeholder="Username"
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
                    value={user.email}
                    placeholder="Email"
                    id="email"
                    required
                    autoComplete="off"
                    onChange={(e) => handler(e)}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    placeholder="Phone"
                    id="phone"
                    required
                    autoComplete="off"
                    onChange={(e) => handler(e)}
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    placeholder="Password"
                    id="password"
                    required
                    autoComplete="off"
                    onChange={(e) => handler(e)}
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-submit">
                  Sing Up Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
