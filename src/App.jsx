import { Routes, Route } from 'react-router-dom';



//components 
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication.component';
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';
 

const App = () => {

  const dispatch=useDispatch();

   // runs once on component mount to retrieve user obj
   useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(
      (user) => {
        if (user) {
          createUserDocumentFromAuth(user)
        }
        //user signed out we store null , if logged in we store object
        // dispatcher passes action to root reducer which passes it onto all reducers 
        dispatch(setCurrentUser(user))
      })
    return unsubscribe
  }, [dispatch])


  return (
    <Routes>
      {/* navigation is parent route */}
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />Route
      </Route>

    </Routes>
  )
}

export default App;