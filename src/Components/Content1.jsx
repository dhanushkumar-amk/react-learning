import React, {useState} from 'react';const Content1 = () => {
  const [items, setItems] = useState([
    {id: 1, checked: true, item: 'Write Coding'},
    {id: 2, checked: true, item: 'Learn Coding'},
    {id: 3, checked: false, item: 'Practice Coding'},
  ]);

  // Function to handle the delete operation
  const handleDelete = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <main>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            <input
              type='checkbox'
              checked={i.checked}
              onChange={() => {}} // Add change handler if needed
            />
            <label>{i.item}</label>
            <button onClick={() => handleDelete(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content1;
