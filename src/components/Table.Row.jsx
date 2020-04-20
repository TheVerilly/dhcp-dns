import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
    TableRow as MaterialTableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import TableRowActionsCell from './Table.Row.ActionsCell';
import TableRowMode from './Table.Row.Mode';

import PT from '../prop-types';

const styles = () => ({
    row: {
        boxShadow: 'inset 5px 0px 0px 0px'
    },
    disabled: {
        color: '#fa89ac'
    },
    enabled: {
        color: '#5eba7d'
    },
});

const TableRow = ({ classes, ...props }) => {
    const isEditMode = props.editableItem?.id === props.row.id;

    const handleEditItem = () => props.onClickEdit(props.row);

    return (
        <MaterialTableRow hover className={clsx(classes.row, {
            [classes.disabled]: props.row.disabled,
            [classes.enabled]: !props.row.disabled
        })}>
            <TableCell padding="checkbox">
                <Checkbox color="primary"  />
            </TableCell>
            <TableRowMode isEditMode={isEditMode} row={props.row} />
            <TableRowActionsCell
                row={props.row}
                isEditMode={isEditMode}
                onClickEdit={handleEditItem}
                onClickCancel={props.onClickCancel}
                onClickRemove={props.onClickRemove}
            />
        </MaterialTableRow>
    );
};

const PT_DATA = {
    editableItem: PropTypes.exact(PT.TABLE_ROW),
    row: PropTypes.exact(PT.TABLE_ROW).isRequired,
};

const PT_HANDLERS = {
    onClickEdit: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onSwitchActiveState: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
};

TableRow.propTypes = {
    classes: PropTypes.object,
    ...PT_DATA,
    ...PT_HANDLERS,
};

export default withStyles(styles)(TableRow);
