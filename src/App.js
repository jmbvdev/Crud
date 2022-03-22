
import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersForm from './components/UsersForm/UsersForm';
import UsersList from './components/UsersList/UsersList';
import './style.css';

function App() {

  const [users, setUsers]= useState([])
  const[usersSelected, setUsersSelected]= useState(null)
  const[showForm, setShowForm]=useState(false)
 

  //------------Get Users-----------------

  useEffect(()=>{
    getUsers()
  },[])

  const getUsers=()=>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res=>setUsers(res.data))
  }

  //------------Add Users-----------------

  const addUsers=(user)=>{
    axios.post("https://users-crud1.herokuapp.com/users/", user)
    .then(()=>{
      getUsers()
      setUsersSelected(null)
    })
  }

  //------------Delete Users-----------------

    const removeUsers=(id)=>{
      axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>getUsers())
    }

  //------------Select Users-----------------

  const selectUsers=user=>setUsersSelected(user)

  //------------Update Users-----------------
  const updateUsers=(user)=>{
    axios.put(`https://users-crud1.herokuapp.com/users/${usersSelected.id}/`,user)
    .then(()=>{
      getUsers()
      setUsersSelected(null)
    })
  }

  return (
    <div className="App">
    
      
      <div className={showForm?"overlay":"hide"}>
       
     
        <UsersForm addUsers={addUsers} usersSelected={usersSelected} updateUsers={updateUsers} setShowForm={setShowForm} />
      </div>


     <UsersList users={users} removeUsers={removeUsers} selectUsers={selectUsers}  setShowForm={setShowForm} showForm={showForm}/>
    </div>
  );
}

export default App;
