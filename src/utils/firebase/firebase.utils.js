// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth , 
    createUserWithEmailAndPassword,
    signInWithRedirect, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,signOut,onAuthStateChanged} from 'firebase/auth';

import {getFirestore , doc , getDoc, setDoc,collection, writeBatch,query, getDocs} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChR_nD4JARnuP59-maC0BZZThN6Plicm4",
  authDomain: "presto-threads-db.firebaseapp.com",
  projectId: "presto-threads-db",
  storageBucket: "presto-threads-db.appspot.com",
  messagingSenderId: "897243733738",
  appId: "1:897243733738:web:9062eb51e1ce2dd4c98193"
};

// Initialize Firebase app instance
const firebaseApp = initializeApp(firebaseConfig);

// sign in provider , could be google ,facebook etc
const googleProvider  = new GoogleAuthProvider();

googleProvider.setCustomParameters({prompt: 'select_account'})


// auth keeps track of authentication state of app
export const auth = getAuth();
// sign in with popup
export const signInWithGooglePopup = ()=>signInWithPopup(auth, googleProvider);

// sign in with redirect
export const signInWithGoogleRedirect = ()=>signInWithRedirect(auth, googleProvider);

// initialise firestore database
export const db = getFirestore();


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd)=>{
  // collection key , e.g Users for users table
 const collectionRef = collection(db,collectionKey);
 const batch = writeBatch(db);

 objectsToAdd.forEach((object)=>{
  const docRef= doc(collectionRef,object.title.toLowerCase())
  batch.set(docRef,object)
 })

await batch.commit()
console.log('finished writing to db')

}

export const getCategoriesAndDocuments = async()=>{
  // accepts db and name of collection
  const collectionRef = collection(db,'collections');
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q);

  //reduce over docs array each category is a doc
  const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot)=>{
    const {title,items} = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc
  },{})

  return categoryMap


}
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) =>{
  if(!userAuth) {
    return 
  }

    // creating user doc json object ,doc method takes 3 arguments, database ,collection name, unique identifier
    const userDocRef = doc(db,'users',userAuth.uid);

    // can get snapshot of data & check if it exists, returns BOOLEAN if db empty
    const userSnapshot = await getDoc(userDocRef);
    // returns boolean
    console.log(userSnapshot.exists())

    // if data doesn't exist
   // create /set data from userauth in collection

    if(!userSnapshot.exists()){
      const {displayName ,email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef,{
          displayName, email, createdAt , ...additionalInformation
        });

      }catch(error){
        console.log('error creating the user',error.message)
      }

      
    }

    // if data exists ,return userDocRef
    return userDocRef;


}



// sign up user
export const createAuthUserWithEmailAndPassword = async (email , password)=>{
  if(!email || !password) {
    return 
  }else {

    return await createUserWithEmailAndPassword(auth , email , password)
  }
}

//sign out method 

export const signOutUser = async ()=> await signOut(auth)

// observer listener for auth change, calls callback anytime auth state changed 
//e.g sign in /out
export const onAuthStateChangedListener = (callback)=> onAuthStateChanged(auth,callback)

// helper function sign in existing user
export const signInAuthUserWithEmailAndPassword = async (email , password)=>{
  if(!email || !password) {
    return 
  }else {

    return await signInWithEmailAndPassword(auth , email , password)
  }
}