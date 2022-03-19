import React, { useEffect, useState } from 'react';
import "../UsersForm/form.css"

const UsersForm = ({addUsers, usersSelected, updateUsers, setShowForm}) => {

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
        <div className='form-container'>
            <div className='form-top'>
                 <button onClick={()=>setShowForm(false)} className='close-btn'><i class="fa-solid fa-x"></i></button>
            </div>
            <form onSubmit={submit}>
                <div className='input-container'>
                    <label htmlFor="firstName"></label>
                    <input
                    type="text" 
                    id='firstName'
                    placeholder='first Name'
                    onChange={e=>setFirstName(e.target.value)}
                    value={firstName}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="lastName"></label>
                    <input
                    type="text" 
                    id='lastName'
                    placeholder='last Name'
                    onChange={e=>setLastName(e.target.value)}
                    value={lastName}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="email"></label>
                    <input
                    type="text" 
                    id='email'
                    placeholder='email'
                    onChange={e=>setEmail(e.target.value)}
                    value={email}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password"></label>
                    <input
                    type="password" 
                    id='password'
                    placeholder='password'
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="date"></label>
                    <input
                    type="date" 
                    id='date'
                    placeholder='birthday'
                    onChange={e=>setDate(e.target.value)}
                    value={date}
                    />
                </div>
                <button className='upload-btn'>upload</button>

            </form>
           
        </div>
    );
};

export default UsersForm;