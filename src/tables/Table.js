import React from 'react'
import PropTypes from 'prop-types';

const Table = props => (
  <table>
    <thead>
      <tr>
        <th>ipAdress</th>
        <th>Domain</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.domain}</td>
            <td>{item.ipAdress}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(item)
                }}>
                Edit
              </button>
              <button onClick={() => props.delete(item.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
);

Table.propTypes = {
    items: PropTypes.array,
    delete: PropTypes.func,
    editRow: PropTypes.func,
}

export default Table
