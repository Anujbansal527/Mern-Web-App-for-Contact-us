import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";

const Login = () => {
  
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //accessing authContext to access token
  const {setTokenInLS} = useAuth();

  const handler = (e) => {
    setUser({
      ...user, //preveious state getting using spread operator
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //console.log("login",response)
      
      if (response.ok) {
        //auth token store client storage for authentication
        //fetching response data in the form of json
        const res_data = await response.json()
        //console.log(res_data)

        //now storing token at locat host
        //localStorage.setItem("token",res_data.token)

        //using conntex api to access this funtion to store and fecth data
        setTokenInLS(res_data.token);

        setUser({
          email: "",
          password: "",
        });
        alert("sucessfull loggedin");
        navigate("/");
      } else {
        alert("Invalid credential");
      }

    } catch (error) {
      console.log("error coccured",error);
    }
  };

  return (
    <section>
      <main>
      <div className="section-registration">
            <div className="container grid grid-two-cols">
          
            <div className="registration-image">
              <img src="" alt="login-img" width={""} height={" "} />
            </div>

            <div className="registration-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              <form onSubmit={(e) => handelSubmit(e)}>
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
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
