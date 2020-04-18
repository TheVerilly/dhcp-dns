import React from 'react';
import PropTypes from 'prop-types';

import {
    TableHead as MaterialTableHead,
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';

const headCells = [
    { id: 'IP_ADDRESS', label: 'ipAddress' },
    { id: 'DOMAIN', label: 'Domain' },
];

const TableHead = props => (
    <MaterialTableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox disabled={props.isLoading} onChange={props.onSelectAllClick}/>
            </TableCell>
            {headCells.map(item => (
                <TableCell key={item.id}>{item.label}</TableCell>
            ))}
            <TableCell padding="none" align="center">Actions</TableCell>
        </TableRow>
    </MaterialTableHead>
);

TableHead.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
};

export default TableHead;