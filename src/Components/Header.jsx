import React from 'react';
const Header = ({title}) => {
  // const headerStyle = {color: 'red'};

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: 'To-DO List',
};
export default Header;
