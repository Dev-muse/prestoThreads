import styled from 'styled-components';



export const Name = styled.span`` 
export const Quantity = styled.span`
display: flex;
align-items:center;

.arrow {
  cursor: pointer;
}

.value {
  margin: 0 10px;
}
` 
export const Price = styled.span`` 

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
img {
  width: 100%;
  height: 100%;
}
`


export const CheckOutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

  ${Name},
  ${Quantity},
  ${Price}{
    width: 23%;
  }


`
export const RemoveBtn = styled.div`
padding-left: 12px;
cursor: pointer;
`


/*

.checkout-item-container {
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;
    align-items:center;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
}

*/
