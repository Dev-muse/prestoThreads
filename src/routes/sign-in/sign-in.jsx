 
import { signInWithGooglePopup, createUserDocumentFromAuth} from
 '../../utils/firebase/firebase.utils'

 import SignUpForm from '../../components/sign-up-form/sign-up-form';

const SignIn = () => {

 

  // popup method to create user document in db
  let logGoogleUser = async()=>{
   const {user} = await signInWithGooglePopup();
    console.log(user)
   const userDocRef= await createUserDocumentFromAuth(user)
  }

   
  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm/>
     </div>
  )
}       

export default SignIn