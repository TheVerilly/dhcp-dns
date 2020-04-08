import React, { useState } from 'react'
import PropTypes from 'prop-types';

const INITIAL_STATE_ITEM = { id: null, domain: '', ipAdress: '' };

const AddForm = props => {
	const [ item, setItem ] = useState(INITIAL_STATE_ITEM);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setItem({ ...item, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();
		if (!item.domain || !item.ipAdress) return;

		props.createAction(item);
		setItem(INITIAL_STATE_ITEM);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>domain</label>
			<input type="text" name="domain" value={item.domain} onChange={handleInputChange} />
			<label>ipAdress</label>
			<input type="text" name="ipAdress" value={item.ipAdress} onChange={handleInputChange} />
			<button>Add new item</button>
		</form>
	)
};

AddForm.propTypes = {
	createAction: PropTypes.func,
};

export default AddForm;
