import React, { useState, useEffect } from 'react'

const EditForm = props => {
  const [ item, setItem ] = useState(props.currentItem);

  useEffect(() => {
      setItem(props.currentItem);
    },[ props ]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateItem(item.id, item)
      }}
    >
      <label>domain</label>
      <input type="text" name="domain" value={item.domain} onChange={handleInputChange} />
      <label>ipAdress</label>
      <input type="text" name="ipAdress" value={item.ipAdress} onChange={handleInputChange} />
      <button>Update</button>
      <button onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
};

export default EditForm
