import { useState } from "react";
import { useAuth } from "../Store/auth";

const defaultContact = {
  username: "",
    email: "",
    message:"",
}

const Contact = () => {
  
  const [contact, setContact] = useState(defaultContact);

  //sate variable to fect and set uesrdata 
  const [userData,setUserData] = useState(true)

  //fetching data of user from context api such as global data
  const {user}= useAuth();

  //console.log("user data contact",user);
  
  //setting empty field with user data that is logged in to server
  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false);
  }

 //console.log(user)

  const handler = (e) => {
    setContact({
      ...contact, //preveious state getting using spread operator
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = async(e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

    if(response.ok){
      setContact(defaultContact)

      const data = await response.json();

      alert("Message sentsucessfull")
    }

    
  };

  return (
    <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>

        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img src="" alt="contact-img" width={""} height={" "} />
          </div>
        

          <section className="section-form">
          <form onSubmit={(e) => handelSubmit(e)}>
            <div>
              <label htmlFor="username">Username </label>
              <input
                type="text"
                name="username"
                value={contact.username}
                placeholder="Username"
                id="username"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
              />
            </div>

            <div>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={contact.email}
                placeholder="Email"
                id="email"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
              />
            </div>

            <div>
              <label htmlFor="message">Message </label>
              <textarea
                type="text"
                name="message"
                value={contact.message}
                placeholder="Enter Your Message"
                id="message"
                required
                autoComplete="off"
                onChange={(e) => handler(e)}
                rows="5"
                cols="30"
              />
            </div>

            <br />
            <button type="submit" className="btn btn-submit">
              Contact US
            </button>
          </form>
          </section>
        </div>

    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.335179746713!2d75.89112842455584!3d22.752939129363632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302af403406fb%3A0x5b50834b117f8bab!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1705774912568!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    
    </section>
    
  );
};
export default Contact;
