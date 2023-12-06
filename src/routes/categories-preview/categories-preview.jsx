import { useContext ,Fragment} from 'react'
import { CategoriesContext } from '../../context/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview'

 

function CategoriesPreview() {
  const {categoriesMap} = useContext(CategoriesContext)
   return (
   
        <Fragment>
          { 
            //  Object.keys returns ["hats","shirts"] etc
            Object.keys(categoriesMap).map((title) =>{
              const products = categoriesMap[title];
              return (<CategoryPreview key={title} title={title} products={products}/>)
            })
          }
          



        </Fragment>

     
 
  )
}

export default CategoriesPreview