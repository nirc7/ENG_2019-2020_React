import React from 'react';
import ItemInShopFC from './ItemInShopC';

export default function ItemsInShopFC(props) {

    let output = props.shopItems.map(
        (item) => <ItemInShopFC item={item} />
    );

    return (
        <div>
            <div style={{ display:'flex',justifyContent:'center', margin:5, padding:5 }} >
                {output}
            </div>
        </div>
    );
}