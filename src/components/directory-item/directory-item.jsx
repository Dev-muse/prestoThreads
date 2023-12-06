import {DirectoryItemContainer,Body,BackgroundImage} from './directory-item.styles.jsx';
import {useNavigate} from 'react-router-dom';


const DirectoryItem = ({category: {imageUrl,title,route}}) => {
  const navigate = useNavigate();
  const onNavigate = ()=> navigate(route)

  return (
    <DirectoryItemContainer onClick={onNavigate}>
              <BackgroundImage imageUrl={imageUrl}/> 
              <Body >
                <h2>{title.toUpperCase()}</h2>
                <p>Shop Now</p>
              </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem