import React from 'react';
import PropTypes from 'prop-types';

import {
    TableRow as MaterialTableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core';

import TableRowActionsCell from './Table.Row.ActionsCell';
import TableRowMode from './Table.Row.Mode';

import PT from '../prop-types';

const TableRow = props => {
    const isEditMode = props.editableItem?.id === props.row.id;

    const handleEditItem = () => props.onClickEdit(props.row);

    return (
        <MaterialTableRow hover>
            <TableCell padding="checkbox">
                <Checkbox />
            </TableCell>
            <TableRowMode isEditMode={isEditMode} row={props.row} />
            <TableRowActionsCell
                isEditMode={isEditMode}
                onClickEdit={handleEditItem}
                onClickCancel={props.onClickCancel}
            />
        </MaterialTableRow>
    );
};

TableRow.propTypes = {
    classes: PropTypes.object,
    editableItem: PropTypes.exact(PT.TABLE_ROW),
    row: PropTypes.exact(PT.TABLE_ROW).isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onSwitchActiveState: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired,
};

export default (TableRow);
