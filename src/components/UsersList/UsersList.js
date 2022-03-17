import React from 'react';
import "./list.css"

const UsersList = ({users, removeUsers, selectUsers}) => {

    return (
        <div>
            <ul>
                {
                    users.map(user=>(
                        <li key={user.id}>
                            <ul>
                                <div className='users-name'>
                                    <li><b>First Name: </b>{user.first_name}</li>
                                    <li><b>Last Name: </b>{user.last_name}</li>
                                </div>
                                <li><b>Email: </b>{user.email}</li>
                                <li><b>Birthday: </b>{user.birthday}</li>
                            </ul>
                            <button onClick={()=>removeUsers(user.id)}><i className="fa-solid fa-trash-can"></i></button>
                            <button onClick={()=>selectUsers(user)}><i className="fa-solid fa-pen-to-square"></i></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;