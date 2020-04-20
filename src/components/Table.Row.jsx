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
import TableRowView from './Table.Row.View';

import useBindFields from '../hook/useBindFields';
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
    const {
        values: editableRow,
        updateValues: setEditableRow,
        handlerBindFields
    } = useBindFields();

    const isEditMode = editableRow?.id === props.row.id;

    const handleStartEdit = () => {
        setEditableRow(props.row);
    }

    const handleCancelEdit = () => {
        setEditableRow(null);
    }

    const handleSave = () => {
        console.log('handleSave', editableRow);
        handleCancelEdit();
    };

    return (
        <MaterialTableRow hover className={clsx(classes.row, {
            [classes.disabled]: props.row.disabled,
            [classes.enabled]: !props.row.disabled
        })}>
            <TableCell padding="checkbox">
                <Checkbox color="primary"  />
            </TableCell>
            <TableRowView
                row={props.row}
                onChangeField={handlerBindFields}
                isEditMode={isEditMode}
                editableRow={editableRow}
            />
            <TableRowActionsCell
                row={props.row}
                isEditMode={isEditMode}
                onClickSave={handleSave}
                onClickStartEdit={handleStartEdit}
                onClickCancelEdit={handleCancelEdit}
                onSwitchActiveState={props.onSwitchActiveState}
                onClickRemove={props.onClickRemove}
            />
        </MaterialTableRow>
    );
};

TableRow.propTypes = {
    classes: PropTypes.object,
    row: PropTypes.exact(PT.TABLE_ROW).isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onSwitchActiveState: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableRow);
