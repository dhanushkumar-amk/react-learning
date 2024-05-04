import React, {useState} from 'react';import './Content.css';
import {FaTrashAlt} from 'react-icons/fa';

const Content1 = () => {
  const [items, setItems] = useState([
    {id: 1, checked: true, item: 'Write Coding'},
    {id: 2, checked: false, item: 'Learn Coding'},
    {id: 3, checked: false, item: 'Practice Coding'},
  ]);

  // Function to handle the delete operation
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? {...item, checked: !item.checked} : item
    );
    setItems(listItem);
  };

  return (
    <main>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <input
              type='checkbox'
              checked={i.checked}
              onChange={() => {
                handleCheck(i.id);
              }} // Add change handler if needed
            />
            <label>{i.item}</label>
            <button
              // className='btn'
              onClick={() => handleDelete(i.id)}>
              <FaTrashAlt
                role='btn'
                tabIndex={0}
              />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content1;
