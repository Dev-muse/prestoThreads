import {Routes,Route} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import Home from './routes/home/home';
import Authentication from './routes/authentication/authentication.component';
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";


  const App = () => {
    
    return (
      <Routes>
        {/* navigation is parent route */}
        <Route path="/" element={<Navigation />} >
          <Route index element = {<Home/>}/>
          <Route path="shop/*" element = {<Shop/>}/>
          <Route path="/checkout" element = {<Checkout/>}/>
          <Route path="auth" element = {<Authentication/>}/>
        </Route>
    
      </Routes>
    )
  }
  
  export default App;