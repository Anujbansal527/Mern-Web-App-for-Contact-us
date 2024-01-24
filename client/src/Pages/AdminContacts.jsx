import { useEffect, useState } from "react";
import { useAuth } from "../Store/auth";

const AdminContacts = () =>{

    //setting data at useState
    const [contacts,setContacts] = useState([]);

     //fetchng token
  const {GlobalAuthToken} = useAuth();

    const getContactsData = async() => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/contacts",
            {
                method:"GET",
                headers: {
                    Authorization: GlobalAuthToken,
                },
            })
            const data = await response.json();

            if(response.ok){    
                setContacts(data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const deleteContacts = async(id) => {
            try {
              const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: GlobalAuthToken,
            },
          })
          const data = await response.json();
          //console.log(data);
        
          if(response.ok){
           getContactsData();
          }
            } catch (error) {
              console.log(error)
            }
        }

    useEffect(()=>{
        getContactsData();
    },[])

    return(
        <> 
           <section className="admin-contacts-section">
            <h1>Admin Contact Data</h1>

            <div className="container admin-users">
                {
                    contacts.map((data,index)=>{
                        //object destructuring to get data of the object
                        const {username,email,message,_id} = data;
                        return(
                            <div key={index} className="user" >
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{message}</p>
                                <button onClick={()=>deleteContacts(_id)/* passing id getting from obj destructuring */} className="btn">Delete</button>
                            </div>
                        )
                    })
                }
            </div>
           </section>
        </>
        )
}
export default AdminContacts;