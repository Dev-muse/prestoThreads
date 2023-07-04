import {useState} from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-up-form.scss';


import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
    displayName :"",
    email:"",
    password: "",
    confirmPassword : "",
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email,password , confirmPassword} = formFields;
    
    // reset form fields
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange = (event)=>{
        const {name, value } = event.target;
        
        setFormFields({...formFields , [name]: value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault(); 
       if(password !== confirmPassword){
        alert("passwords do not match");
        return
       }
    
       try{
        // get user auth object from firebase for email/pass
        const {user} = await createAuthUserWithEmailAndPassword(email,password);
        // then create user doc in database + additional information for missing displayName
        await createUserDocumentFromAuth(user, {displayName})
        resetFormFields()

       }
       catch(error){

        if(error.code == 'auth/email-already-in-use'){
            alert('Cannot create user, email already in use')
        }else{

            console.error("user encountered an error", error)
        }
    
    
    
    }


    }
 
  return (
    <div className="sign-up-container">
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form  onSubmit={handleSubmit} >
             
            <FormInput 
            label="Display Name"
            required
            type="text"
            id="name" 
            name="displayName"
            onChange = {handleChange} 
            value={displayName} /> 
            
            <FormInput 
            label="Email"
            required
            type="email"
            id="email" 
            name="email" 
            onChange = {handleChange}
            value={email}/> 
            
            <FormInput 
            label="Password"
            required 
            type="password" 
            id="pass1"
            name="password"
            value={password} 
            onChange = {handleChange}/> 
            
            <FormInput 
            label = 'Confirm password'
            required
            type="password"
            id="pass2"
            name="confirmPassword"
            onChange = {handleChange}
            value={confirmPassword} /> 
            
            <Button  type="submit">Sign Up</Button>
        </form>
    </div>
  )
}



export default SignUpForm