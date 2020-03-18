import React from 'react';
import ItemInShopFC from './ItemInShopC';

export default function ItemsInShopFC(props) {

  function getItemsIdFromItemInShop(itemId) {
    props.sendItemsIdFromItemsInShop(itemId);
  }

  let output = <h1 style={{marginTop:150, marginBottom:150}}>THE SHOP IS EMPTY!!!</h1>
  console.log(props.shopItems.length);
  
  if (props.shopItems.length !== 0) {
    output = props.shopItems.map(
      (item) => <ItemInShopFC key={item.id} item={item}
        sendItemsIdFromItemInShop={getItemsIdFromItemInShop} />
    );
  }


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: 5, padding: 5 }} >
        {output}
      </div>
    </div>
  );
}