import React, {useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const AddUser = (props)=>{
//    const nameInputRef = useRef();
//    const ageInputRef = useRef();

    const[Name,setName]= useState('');
    const[Age,setAge]= useState('');
    const[collegeName,setCollegeName]=useState('');
    const[error,setError] = useState();
    
    const formhandler = (event)=>{
        event.preventDefault();
        // const enterName = nameInputRef.current.value;
        // const enterAge = ageInputRef.current.value;

       if(Name.trim().length ===0 || Age.trim().length===0 || collegeName.trim().length===0){
        setError({
            title: 'Invalid Input',
            message: "please enter a valid name ,age and college name (non-empty)"
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
       
        props.onAddUser(Name,Age,collegeName);
        // nameInputRef.current.value='';
        // ageInputRef.current.value='';

        setName('');
        setAge('');
        setCollegeName('');
        }

        const namehandler = (event)=>{
            setName(event.target.value);
          }
          const agehandler = (event)=>{
            setAge(event.target.value);
          }
         const collegeNamehandler =(event)=>{
            setCollegeName(event.target.value);
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
             <input 
              value={Name} 
             id="name" 
             type="text"
             onChange={namehandler}
            // ref={nameInputRef}
             />
            
             <label htmlFor="age">
             Age (Years):
             </label> 
             <input type="number"
               value={Age} 
              id="age"
              onChange={agehandler}
              // ref={ageInputRef}
               />
               
            <label htmlFor="college-name">
             College Name:
             </label> 
             <input 
              value={collegeName} 
             id="college-name" 
             type="text"
             onChange={collegeNamehandler}
            
             />
         <Button type="submit">Add User</Button>
        </form>
        </Card>
    </>)
}
export default AddUser;