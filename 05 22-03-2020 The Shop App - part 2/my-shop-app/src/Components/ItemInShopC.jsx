import React from 'react';

export default function ItemInShopFC(props) {
  
  function btnAddToCart(){
    props.sendItemsIdFromItemInShop(props.item.id);    
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin:10, padding:5 }}>
        <img src={props.item.imgSrc} style={{width:200, height:200}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">{props.item.price}$</p>
          <a href="#" className="btn btn-primary" onClick={btnAddToCart}>Add to Cart</a>
        </div>
      </div>
    </div>
  );
}