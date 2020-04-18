import React, { Fragment } from 'react';
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


const Table = props => {
    // const [selected, setSelected] = React.useState([]);

    const handleSelectAllClick = () => {
        console.log('handleSelectAllClick');
    }

    const handleCreate = () => {
        console.log('handleOnCreate');
    };

    const handleEdit = () => {
        console.log('handleOnEdit');
    };

    const handleSwitchActiveState = () => {
        console.log('switchActiveState');
    };

    const handleRemove = () => {
        console.log('handleOnRemove');
    };


    return (
        <Paper>
            <TableToolbar isLoading={props.isLoading} />
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
                                                onClickCreate={handleCreate}
                                                onClickEdit={handleEdit}
                                                onSwitchActiveState={handleSwitchActiveState}
                                                onClickRemove={handleRemove}
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
    data: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        ipAddress: PropTypes.string,
        domain: PropTypes.string
    })),
};

export default Table;


