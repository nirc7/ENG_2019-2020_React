import React, { Component } from 'react';
import item from '../Classes/item';
import ItemsInShopFC from './ItemsInShopFC';
import Header from './Header';
import ItemsInCartFC from './ItemsInCartFC';

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
      cartItems: [
        new item(4, 'pants2', 150, './images/pants.jpg')
      ]
    };
  }

  getItemsIdFromItemsInShop = (itemId) => {
    const item2MoveFromShop2Cart = this.state.shopItems.filter(item => item.id === itemId)[0];
    const newShopItems = this.state.shopItems.filter(item => item.id !== itemId);
    const newCartItems = [...this.state.cartItems, item2MoveFromShop2Cart];
    this.setState({
      shopItems: newShopItems,
      cartItems: newCartItems
    });
  }

  getItemsIdFromItemsInCart = (itemId) => {
    const item2MoveFromCart2Shop = this.state.cartItems.filter(item => item.id === itemId)[0];
    const newCartItems = this.state.cartItems.filter(item => item.id !== itemId);
    const newShopItems = [...this.state.shopItems, item2MoveFromCart2Shop];
    this.setState({
      shopItems: newShopItems,
      cartItems: newCartItems
    });
  }

  render() {
    return (
      <div>
        {Header}
        <ItemsInShopFC shopItems={this.state.shopItems}
          sendItemsIdFromItemsInShop={this.getItemsIdFromItemsInShop} />
        <ItemsInCartFC cartItems={this.state.cartItems}
          sendItemsIdFromItemsInCart={this.getItemsIdFromItemsInCart} />
      </div>
    );
  }
}