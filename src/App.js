import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const[userList,setUserList]= useState([]);
  const addUserHandler =(uName,uAge,ucollegeName)=>{
    setUserList((prevUserList)=>{
      return [...prevUserList,{name:uName,age: uAge,id:Math.random().toString(),collegeName:ucollegeName}];
    })
  }
  
  return(<>
 <AddUser  onAddUser={addUserHandler} />
 <UserList users={userList} />
 </>
)}

export default App;
