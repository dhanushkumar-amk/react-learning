import React, {useState} from 'react';
const Content1 = () => {
  const [items, setItems] = useState([
    {id: 1, checked: true, item: 'Write Coding'},
    {id: 2, checked: true, item: 'Learn Coding'},
    {id: 3, checked: false, item: 'Practice Coding'},
  ]);

  return (
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
  );
};

export default Content1;

// list creating map is necessary  concept map, filter

// ? map
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const item1 = numbers.map((n) => ({numbers: n}));
// console.log(item1);

// ? filter
// const numbers = [1, 2, 3, 4, 5, 6, 7];
//   const item1 = numbers.filter((n) => n > 3);
//   console.log(item1);
