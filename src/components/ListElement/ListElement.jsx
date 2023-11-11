import React from 'react';

const ListElement = ({ name, phone }) => {
  return (
    <li>
      {name}: {phone}
    </li>
  );
};

export default ListElement;
