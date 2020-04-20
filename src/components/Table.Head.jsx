import React from 'react';
import PropTypes from 'prop-types';

import {
    TableHead as MaterialTableHead,
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';

const headCells = [
    { id: 'DOMAIN', label: 'Domain' },
    { id: 'IP_ADDRESS', label: 'ipAddress' },
];

const TableHead = props => (
    <MaterialTableHead>
        <TableRow>
            <TableCell padding="checkbox">
                <Checkbox
                    color="primary"
                    disabled={props.isLoading || props.disabledCheckbox}
                    onChange={props.onSelectAllClick}
                />
            </TableCell>
            {headCells.map(item => (
                <TableCell key={item.id}>{item.label}</TableCell>
            ))}
            <TableCell padding="none" align="center">Actions</TableCell>
        </TableRow>
    </MaterialTableHead>
);

TableHead.propTypes = {
    disabledCheckbox: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
};

export default TableHead;
