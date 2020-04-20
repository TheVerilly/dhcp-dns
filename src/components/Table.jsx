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
    const [isCreatableMode, setCreatableMode] = useState(false);

    const handleSelectAllClick = () => {
        console.log('handleSelectAllClick');
    };

    const handleToggleCreateMode = value => {
        setCreatableMode(value);
    };

    const handleSave = data => {
        console.log(data);
    };

    const handleRemove = row => {
        console.log('handleOnRemove', row);
    };

    const handleSwitchActiveState = id => {
        console.log('switchActiveState', id);
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
                                <TableCell colSpan={5}>
                                    <Typography align="center">Fetching...</Typography>
                                </TableCell>
                            </MaterialTableRow>
                        ) : (
                            <Fragment>
                                {
                                    emptyData ? (
                                        <MaterialTableRow>
                                            <TableCell colSpan={5}>
                                                <Typography align="center">Empty data</Typography>
                                            </TableCell>
                                        </MaterialTableRow>
                                    ) : (
                                        props.data.map(row => (
                                            <TableRow
                                                key={row.id}
                                                row={row}
                                                onClickSave={handleSave}
                                                onClickRemove={handleRemove}
                                                onSwitchActiveState={handleSwitchActiveState}
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
};

Table.propTypes = {
    isLoading: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.exact(PT.TABLE_ROW)),
};

export default Table;
