import React, { useState, useEffect } from 'react';

const ItemForm = ({ addItem, updateItem, editingItem }) => {
  const [item, setItem] = useState({ id: '', name: '' });

  useEffect(() => {
    if (editingItem) {
      setItem(editingItem);
    } else {
      setItem({ id: '', name: '' });
    }
  }, [editingItem]);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateItem(item);
    } else {
      addItem({ ...item, id: Date.now() });
    }
    setItem({ id: '', name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={handleChange}
        placeholder="Item Name"
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ItemForm;
