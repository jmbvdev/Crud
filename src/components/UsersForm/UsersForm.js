import React, { useEffect, useState } from 'react';
import "../UsersForm/form.css"

const UsersForm = ({addUsers, usersSelected, updateUsers}) => {

    const[firstName, setFirstName]= useState("")
    const [lastName, setLastName]= useState("")
    const[email, setEmail]= useState("")
    const[password, setPassword]= useState("")
    const[date, setDate]= useState("")

    useEffect(()=>{
        if (usersSelected) {
            setFirstName(usersSelected.first_name)
            setLastName(usersSelected.last_name)
            setEmail(usersSelected.email)
            setPassword(usersSelected.password)
            setDate(usersSelected.birthday)
        } else {
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setDate("")
        }

    },[usersSelected])

    const submit=e=>{
        e.preventDefault()
       const user ={
           first_name: firstName,
           last_name: lastName,
           email,
           password,
           birthday:date
       }
       if (usersSelected) {
           user.id= usersSelected.id
           updateUsers(user)
       }else{
           addUsers(user)
       }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className='input-container'>
                    <label htmlFor="firstName">First Name</label>
                    <input
                    type="text" 
                    id='firstName'
                    onChange={e=>setFirstName(e.target.value)}
                    value={firstName}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                    type="text" 
                    id='lastName'
                    onChange={e=>setLastName(e.target.value)}
                    value={lastName}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="email">Email</label>
                    <input
                    type="text" 
                    id='email'
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password" 
                    id='password'
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="date">Birth Date</label>
                    <input
                    type="date" 
                    id='date'
                    onChange={e=>setDate(e.target.value)}
                    value={date}
                    />
                </div>
                <button>Upload</button>

            </form>
           
        </div>
    );
};

export default UsersForm;