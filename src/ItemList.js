import React from 'react';

const ItemList = ({ items, deleteItem, setEditingItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => setEditingItem(item)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
