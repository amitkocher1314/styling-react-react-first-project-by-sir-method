import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props)=>{
    const[Name,setName]= useState('');
    const[Age,setAge]= useState('');
    const[error,setError] = useState();
    
    const formhandler = (event)=>{
        event.preventDefault();
       if(Name.trim().length ===0 || Age.trim().length===0){
        setError({
            title: 'Invalid Input',
            message: "please enter a valid name and age (non-empty)"
        })
        return;
       }
       if(+Age<1){            //IMPORTANT CONCEPT SEE + OPERATOR ADDED ALTHOUGH WORK WITHOUT IT BUT FOR SAFETY WE DO
        setError({
            title: 'Invalid Age',
            message: "please enter a valid age (>0)"
        })
        return
       }
        // let data={
        //   OurKey:Math.random().toString(),
        //   Name:Name,
        //   Age:Age
        // }
        //console.log(data)
        props.onAddUser(Name,Age);
        setName('');
        setAge('')
        }

        const namehandler = (event)=>{
            setName(event.target.value);
          }
          const agehandler = (event)=>{
            setAge(event.target.value);
          }


          const errorHandler = () =>{
            setError(null)
          }
          
    return(<>

    {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorHandler}/>}

        <Card className={classes.input}>
        <form onSubmit={formhandler}>
            <label htmlFor="name">
             Username:
             </label> 
             <input value={Name} id="name" onChange={namehandler} />
            
             <label htmlFor="age">
             Age (Years):
             </label> 
             <input type="number" value={Age} id="age" onChange={agehandler} />
         <Button type="submit">Add User</Button>
        </form>
        </Card>
    </>)
}
export default AddUser;