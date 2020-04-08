import React, { Fragment, useState } from 'react'

import AddForm from './forms/AddForm'
import EditForm from './forms/EditForm'
import Table from './tables/Table'

const initialData = [
  { id: 1, ipAdress: '444', domain: 'dfgdrthsfgbh' },
  { id: 2, ipAdress: '777', domain: 'dgbsdhgsgxrhtb' },
  { id: 3, ipAdress: '234234234', domain: 'sdfxvbcxv xcvxcvxcvxcvxv' },
];

const initialFormState = { id: null, ipAdress: '', domain: '' };

const App = () => {
  const [ data, setData ] = useState(initialData);
  const [ currentItem, setCurrentItem ] = useState(initialFormState);
  const [ editing, setEditing ] = useState(false);

  const createItem = item => {
    item.id = data.length + 1;
    setData([ ...data, item ]);
  };

  const deleteItem = id => {
    setEditing(false);
    setData(data.filter(item => item.id !== id));
  };

  const updateItem = (id, updateData) => {
    setEditing(false);
    setData(data.map(item => (item.id === id ? updateData : item)));
  };

  const editRow = item => {
    setEditing(true);
    setCurrentItem({ id: item.id, ipAdress: item.ipAdress, domain: item.domain });
  };

  return (
      <div>
        <div>
          <div>
            {editing ? (
                <Fragment>
                  <h2>Edit</h2>
                  <EditForm
                      editing={editing}
                      setEditing={setEditing}
                      currentItem={currentItem}
                      updateItem={updateItem}
                  />
                </Fragment>
            ) : (
                <Fragment>
                  <h2>Add</h2>
                  <AddForm createAction={createItem} />
                </Fragment>
            )}
          </div>
          <div>
            <h2>View</h2>
            <Table items={data} editRow={editRow} delete={deleteItem} />
          </div>
        </div>
      </div>
  )
};

export default App;
