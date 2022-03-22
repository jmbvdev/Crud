import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "../UsersForm/form.css"

const UsersForm = ({addUsers, usersSelected, updateUsers, setShowForm}) => {
    
    const {register, handleSubmit,reset}= useForm()
  
    const defaultValues={first_name:"", last_name:"", email:"", password:"", date:""}

    useEffect(()=>{
        if (usersSelected) {
            reset(usersSelected)
        } else{
            reset(defaultValues)
        }

    },[usersSelected, reset])

    const submit=user=>{
        reset(defaultValues)
        if (usersSelected) {
            updateUsers(user)
        } else {
            addUsers(user)
        }
    }

    return (
        <div className='form-container'>
            <div className='form-top'>
                 <button onClick={()=>setShowForm(false)} className='close-btn'><i className="fa-solid fa-x"></i></button>
            </div>
            <form onSubmit={handleSubmit(submit)}>
                <div className='input-container'>
                    <label htmlFor="firstName"></label>
                    <input
                    type="text" 
                    id='firstName'
                    placeholder='first Name'
                    {...register("first_name")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="lastName"></label>
                    <input
                    type="text" 
                    id='lastName'
                    placeholder='last Name'
                    {...register("last_name")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="email"></label>
                    <input
                    type="text" 
                    id='email'
                    placeholder='email'
                    {...register("email")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password"></label>
                    <input
                    type="password" 
                    id='password'
                    placeholder='password'
                    {...register("password")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="date"></label>
                    <input
                    type="date" 
                    id='date'
                    placeholder='birthday'
                    {...register("birthday")}
                    />
                </div>
                <button className='upload-btn'>upload</button>

            </form>
           
        </div>
    );
};

export default UsersForm;