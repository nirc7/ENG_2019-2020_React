import React from 'react';
import { Toast } from 'react-bootstrap';

export default function ItemInCartFC(props) {

  function removeItem() {
    props.sendItemIdFromItemInCart(props.item.id);
  }

  return (
    <div>
      <Toast onClose={removeItem} style={{ margin: 5 }}>
        <Toast.Header>
          <img src={props.item.imgSrc} width="20" height="20" className="rounded mr-2" alt="" />
          <strong className="mr-auto" style={{ paddingRight: 25 }}>
            {props.item.name}
          </strong>
          <small style={{ marginLeftt: 15 }}> ruppins shop </small>
        </Toast.Header>
        <Toast.Body>{props.item.name} for {props.item.price}$</Toast.Body>
      </Toast>
    </div>
  );
}