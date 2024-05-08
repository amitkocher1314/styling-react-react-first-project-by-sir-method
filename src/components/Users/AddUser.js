import React, {useState ,useRef} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props)=>{
   const nameInputRef = useRef();
   const ageInputRef = useRef();

    // const[Name,setName]= useState('');
    // const[Age,setAge]= useState('');
    const[error,setError] = useState();
    
    const formhandler = (event)=>{
        event.preventDefault();
        const enterName = nameInputRef.current.value;
        const enterAge = ageInputRef.current.value;

       if(enterName.trim().length ===0 || enterAge.trim().length===0){
        setError({
            title: 'Invalid Input',
            message: "please enter a valid name and age (non-empty)"
        })
        return;
       }
       if(+enterAge<1){            //IMPORTANT CONCEPT SEE + OPERATOR ADDED ALTHOUGH WORK WITHOUT IT BUT FOR SAFETY WE DO
        setError({
            title: 'Invalid Age',
            message: "please enter a valid age (>0)"
        })
        return
       }
       
        props.onAddUser(enterName,enterAge);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
        }

        // const namehandler = (event)=>{
        //     setName(event.target.value);
        //   }
        //   const agehandler = (event)=>{
        //     setAge(event.target.value);
        //   }


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
            //  value={Name} 
             id="name" 
             type="text"
            //  onChange={namehandler}
             ref={nameInputRef}
             />
            
             <label htmlFor="age">
             Age (Years):
             </label> 
             <input type="number"
            //   value={Age} 
              id="age"
            //  onChange={agehandler}
               ref={ageInputRef}
               />
         <Button type="submit">Add User</Button>
        </form>
        </Card>
    </>)
}
export default AddUser;