import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import {
    Paper,
    Table as MaterialTable,
    TableBody,
    TableCell,
    TableRow as MaterialTableRow,
    Typography
} from '@material-ui/core';

import TableHead from './Table.Head';
import TableRow from './Table.Row';
import TableToolbar from './Table.Toolbar';

import PT from '../prop-types';

const Table = props => {
    // const [selected, setSelected] = useState([]);
    const [editableItem, setEditableItem] = useState(null);
    const [isCreatableMode, setCreatableMode] = useState(false);

    const handleSelectAllClick = () => {
        console.log('handleSelectAllClick');
    }

    const handleToggleCreateMode = value => {
        setCreatableMode(value);
    };

    const handleSave = data => {
        props.actionUpdateData(data)
    };

    const handleRemove = () => {
        console.log('handleOnRemove');
    };

    const handleToggleEditMode = value => {
        setEditableItem(value);
    };

    const handleSwitchActiveState = () => {
        console.log('switchActiveState');
    };


    return (
        <Paper>
            <TableToolbar
                isLoading={props.isLoading}
                creatableMode={isCreatableMode}
                onClickToggleCreateMode={handleToggleCreateMode}
                onClickSave={handleSave}
            />
            <MaterialTable>
                <TableHead
                    isLoading={props.isLoading}
                    rowCount={props.data.length}
                    onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                    {
                        props.isLoading ? (
                            <MaterialTableRow>
                                <TableCell colSpan={6}>
                                    <Typography align="center">Fetching...</Typography>
                                </TableCell>
                            </MaterialTableRow>
                        ) : (
                            <Fragment>
                                {
                                    (props.data.length === 0) ? (
                                        <MaterialTableRow>
                                            <TableCell colSpan={6} />
                                        </MaterialTableRow>
                                    ) : (
                                        props.data.map(row => (
                                            <TableRow
                                                key={row.id}
                                                row={row}
                                                editableItem={editableItem}
                                                onClickEdit={handleToggleEditMode}
                                                onClickSave={handleSave}
                                                onSwitchActiveState={handleSwitchActiveState}
                                                onClickRemove={handleRemove}
                                                onClickCancel={() => handleToggleEditMode(null)}
                                            />
                                        ))
                                    )
                                }
                            </Fragment>
                        )
                    }
                </TableBody>
            </MaterialTable>
        </Paper>
    );
}

Table.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.exact(PT.TABLE_ROW)),
    actionUpdateData: PropTypes.func.isRequired,
};

export default Table;


