import React, { useState } from 'react';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

const CRUDDemo = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <ItemForm addItem={addItem} updateItem={updateItem} editingItem={editingItem} />
      <ItemList items={items} deleteItem={deleteItem} setEditingItem={setEditingItem} />
    </div>
  );
};

export default CRUDDemo;
