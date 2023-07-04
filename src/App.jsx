import {Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import SignIn from './routes/sign-in/sign-in';
const Shop = ()=>{
  return (
    <h1>Welcome to the shop</h1>
  )
}

  const App = () => {
    
    return (
      <Routes>
        {/* navigation is parent route */}
        <Route path="/" element={<Navigation />} >
          <Route index element = {<Home/>}/>
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="sign-in" element = {<SignIn/>}/>
        </Route>
    
      </Routes>
    )
  }
  
  export default App;