import React, {useState} from 'react';
const Content2 = () => {
  const [items, setItems] = useState([
    {id: 1, checked: true, item: 'Write Coding'},
    {id: 2, checked: true, item: 'Learn Coding'},
    {id: 3, checked: false, item: 'Practice Coding'},
  ]);
  return (
    <div>
      <main>
        <ul>
          {items.map((i) => {
            <li>
              <input
                type='checkbox'
                checked={i.checked}
              />
              <label>{i.item}</label>
              <button>Delete</button>
            </li>;
          })}
        </ul>
      </main>
    </div>
  );
};

export default Content2;
