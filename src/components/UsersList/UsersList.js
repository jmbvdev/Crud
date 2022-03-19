import React from 'react';
import "./list.css"

const UsersList = ({users, removeUsers, selectUsers,setShowForm, showForm}) => {
   

    return (
        <div className='users-container'>
              <button onClick={()=>setShowForm(!showForm)} className="add-btn">Add user</button>
          
            <ul className='card-container' >
                {
                    users.map(user=>(
                        <li key={user.id}>
                            <ul className='user-card'>
                               
                                <li><b>First Name: </b>{user.first_name}</li>
                                <li><b>Last Name: </b>{user.last_name}</li>
                                <li><b>Email: </b>{user.email}</li>
                                <li><b>Birthday: </b>{user.birthday}</li>
                                <div className='container-btn'>
                                    <button onClick={()=>removeUsers(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                                    <button onClick={()=>{
                                        selectUsers(user)
                                        setShowForm(true)
                                    }}><i className="fa-solid fa-pen-to-square"></i></button>

                                </div>
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;