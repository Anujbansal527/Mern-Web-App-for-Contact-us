import { useState } from "react";
import Analytic from "../Component/Analytics";
import { useAuth } from "../Store/auth";


const About = () =>
{


  const {user}= useAuth();

  console.log(user.username)

    return(
        <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">

              <h1>Welcome, { user ? user.username : "to About Page"}</h1>
              <br/>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, a
                porro earum distinctio dolorum corrupti fuga libero hic natus et
              </p>
              <br/>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
  
                <a href="/service">
                  <button className="btn secondary-btn">Services</button>
                </a>
              </div>
            </div>
  
            <div className="hero-image">
              <img src="" alt="image" width={""} height={""} />
            </div>
          </div>

          <Analytic/>
        </section>
      </main>
    )
}

export default About;