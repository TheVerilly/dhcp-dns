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

    const handleRemove = row => {
        console.log('handleOnRemove', row);
    };

    const handleToggleEditMode = value => {
        setEditableItem(value);
    };

    const handleSwitchActiveState = () => {
        console.log('switchActiveState');
    };

    const emptyData = props.data.length === 0;

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
                    disabledCheckbox={emptyData}
                    isLoading={props.isLoading}
                    rowCount={props.data.length}
                    onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                    {
                        props.isLoading ? (
                            <MaterialTableRow>
                                <TableCell colSpan={4}>
                                    <Typography align="center">Fetching...</Typography>
                                </TableCell>
                            </MaterialTableRow>
                        ) : (
                            <Fragment>
                                {
                                    emptyData ? (
                                        <MaterialTableRow>
                                            <TableCell colSpan={4}>
                                                <Typography align="center">Empty data</Typography>
                                            </TableCell>
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


