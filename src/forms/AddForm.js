import React, { useState } from 'react'

const AddForm = props => {
	const initialFormState = { id: null, domain: '', ipAdress: '' };
	const [ item, setItem ] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setItem({ ...item, [name]: value });
	};

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				if (!item.domain || !item.ipAdress) return;

				props.createAction(item);
				setItem(initialFormState);
			}}
		>
			<label>domain</label>
			<input type="text" name="domain" value={item.domain} onChange={handleInputChange} />
			<label>ipAdress</label>
			<input type="text" name="ipAdress" value={item.ipAdress} onChange={handleInputChange} />
			<button>Add new item</button>
		</form>
	)
};

export default AddForm;
