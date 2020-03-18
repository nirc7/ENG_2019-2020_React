import React from 'react';
import ItemInCartFC from './ItemInCartFC';

export default function ItemsInCartFC(props) {

  function getItemIdFromItemInCart(itemId) {
    props.sendItemsIdFromItemsInCart(itemId);
  }

  let output = <h1>Cart is Empty!!!</h1>
  let totalPrice = 0;

  if (props.cartItems.length !== 0) {
    output = props.cartItems.map(
      (item) => {
        totalPrice += item.price;
        return <ItemInCartFC key={item.id} item={item}
          sendItemIdFromItemInCart={getItemIdFromItemInCart} />
      }
    );
  }

  return (
    <div >
      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'center',
        fontSize: 24, color: 'green',
        fontFamily: 'david', fontWeight: 'bold', margin: 5
      }}  >
        <div>My Cart </div>
        <div style={{ marginLeft: 30, color: 'purple' }}> total price:{totalPrice}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {output}
      </div>
    </div>
  );
}