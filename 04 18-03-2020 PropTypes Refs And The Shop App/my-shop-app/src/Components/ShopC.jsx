import React, { Component } from 'react';
import item from '../Classes/item';
import ItemsInShopFC from './ItemsInShopFC';
import Header from './Header';

const shopItems = [
  new item(1, 'shirt', 20, './images/shirt.jpg'),
  new item(2, 'hat', 10, './images/hat.jpg'),
  new item(3, 'pants', 50, './images/pants.jpg')
];


export default class ShopC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: shopItems,
      cartItems: []
    };
  }

  render() {
    return (
      <div>
        {Header}
        <ItemsInShopFC shopItems={this.state.shopItems} />
      </div>
    );
  }
}