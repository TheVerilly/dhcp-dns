import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

const EditForm = props => {
  const [ item, setItem ] = useState(props.currentItem);

  useEffect(() => {
      setItem(props.currentItem);
  },[props.currentItem]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateItem(item.id, item)
  }

  const handleCancel = () => props.setEditing(false);

  return (
    <form onSubmit={handleSubmit}>
      <label>domain</label>
      <input type="text" name="domain" value={item.domain} onChange={handleInputChange} />
      <label>ipAdress</label>
      <input type="text" name="ipAdress" value={item.ipAdress} onChange={handleInputChange} />
      <button>Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </form>
  )
};

EditForm.propTypes = {
  currentItem: PropTypes.shape({
    id: PropTypes.number,
    ipAdress: PropTypes.string,
    domain: PropTypes.string
  }),
  setEditing: PropTypes.func,
  updateItem: PropTypes.func,
};

export default EditForm
