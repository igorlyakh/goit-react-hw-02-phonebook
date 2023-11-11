import React from 'react';

const FilterField = ({ contactFilter, onFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        type="text"
        value={contactFilter}
        onChange={e => {
          onFilter(e.target.value);
        }}
      />
    </div>
  );
};

export default FilterField;
