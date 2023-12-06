 import {Routes,Route} from 'react-router-dom'
 import CategoriesPreview from '../categories-preview/categories-preview';
 import Category from '../category/category.component';
// import './shop.styles.jsx';
 


function Shop() {
    return (
      <Routes>
        <Route index element={ <CategoriesPreview/> }/>
        {/* :category is special dynamic string for Category component */}
        <Route path=':category' element={ <Category/> }/>
        
      </Routes>

     
 
  )
}

export default Shop