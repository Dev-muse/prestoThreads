import {useState} from 'react';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-in-form.scss';


import {signInWithGooglePopup,createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils';
const defaultFormFields = {
     email:"",
    password: "",
 }

const SignInForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);
    const { email,password   } = formFields;
    
    // reset form fields
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields)
    }


    
    // popup method to create user document in db
    let signInWithGoogle = async()=>{
        const {user} = await signInWithGooglePopup();
      
        await createUserDocumentFromAuth(user)
    }
 




    const handleChange = (event)=>{
        const {name, value } = event.target;
        
        setFormFields({...formFields , [name]: value})
    }

    const handleSubmit = async (event)=>{
        event.preventDefault(); 
       
    
       try{
        const response = await signInAuthUserWithEmailAndPassword(email,password)
        resetFormFields()

       }
       catch(error){
        console.log(error)
        switch(error.code){
            case "auth/wrong-password": 
            alert("incorrect password for email")
            break;
            case "auth/user-not-found": 
            alert("No user associated with this email")
            break;
            default: 
            console.log(error)
            
        }


    
    
    
    
    }


    }
 
  return (
    <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form  onSubmit={handleSubmit} >
             
            
            
            <FormInput 
            label="Email"
            required
            type="email"
           
            name="email" 
            onChange = {handleChange}
            value={email}/> 
            
            <FormInput 
            label="Password"
            required 
            type="password" 
            
            name="password"
            value={password} 
            onChange = {handleChange}/> 
            
          
            <div className="buttons-container">
                
                <Button  type="submit">Sign In</Button>
                <Button type="button" buttonType="google"
                onClick={signInWithGoogle}>Google sign in</Button>
            </div>
        </form>
    </div>
  )
}



export default SignInForm