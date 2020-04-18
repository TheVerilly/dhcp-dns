import React from 'react';
import PropTypes from 'prop-types';

import {
    TableRow as MaterialTableRow,
    TableCell,
    Checkbox,
    Switch,
    IconButton
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

const styles = () => ({
    cellActions: {
        width: 275,
        '& > button:not(:last-child)': {
            marginRight: 20
        }
    }
});

const TableRow = props => {
    return (
        <MaterialTableRow hover>
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            <TableCell>{props.row.ipAddress}</TableCell>
            <TableCell>{props.row.domain}</TableCell>
            <TableCell align="center" className={props.classes.cellActions}>
                <IconButton onClick={props.onClickCreate} color="primary"><AddIcon /></IconButton>
                <IconButton onClick={props.onClickEdit} color="primary"><EditIcon /></IconButton>
                <IconButton onClick={props.onClickRemove} color="secondary"><DeleteIcon /></IconButton>
                <Switch checked={true} onChange={props.onSwitchActiveState} />
            </TableCell>
        </MaterialTableRow>
    );
};

TableRow.propTypes = {
    classes: PropTypes.object,
    row: PropTypes.exact({
        id: PropTypes.number,
        ipAddress: PropTypes.string,
        domain: PropTypes.string,
    }).isRequired,
    onClickCreate: PropTypes.func.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onSwitchActiveState: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableRow);
