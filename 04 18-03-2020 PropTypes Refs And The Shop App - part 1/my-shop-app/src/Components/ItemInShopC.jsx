import React from 'react';

export default function ItemInShopFC(props) {


  function btnAddToCart(){
    console.log(props.item.id);    
  }

  return (
    <div>
      <div class="card" style={{ width: '18rem', margin:10, padding:5 }}>
        <img src={props.item.imgSrc} style={{width:200, height:200}} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.item.name}</h5>
          <p class="card-text">{props.item.price}$</p>
          <a href="#" class="btn btn-primary" onClick={btnAddToCart}>Add to Cart</a>
        </div>
      </div>
    </div>
  );
}