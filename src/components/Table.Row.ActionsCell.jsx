import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import {Button, IconButton, Switch, TableCell} from '@material-ui/core';
import {Delete as DeleteIcon, Edit as EditIcon} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

import DialogConfirm from './DialogConfirm';

import PT from '../prop-types';

const styles = () => ({
    cellActions: {
        width: 200,
        '& > button:not(:last-child)': {
            marginRight: 20
        }
    }
});

const TableRowActionsCell = props => {
    const [openDialog, setOpen] = useState(false);

    const handleClickOpenDialog = () => {
        setOpen(true);
    };

    const handleClickCloseDialog = () => {
        setOpen(false);
    };

    const handleClickConfirmDialog = () => {
        handleClickCloseDialog();
        props.onClickRemove(props.row);
    };

    return  (
        <Fragment>
            {
                props.isEditMode ? (
                    <Fragment>
                        <TableCell align="center" className={props.classes.cellActions}>
                            <Button onClick={props.onClickSave} variant="contained" color="primary">Save</Button>
                            <Button onClick={props.onClickCancelEdit} variant="contained" color="secondary">Cancel</Button>
                        </TableCell>
                    </Fragment>
                ) : (
                    <TableCell align="center" className={props.classes.cellActions}>
                        <IconButton
                            color="primary"
                            disabled={props.row.disabled}
                            onClick={props.onClickStartEdit}
                        >
                            <EditIcon />
                        </IconButton>
                        <IconButton
                            color="secondary"
                            onClick={handleClickOpenDialog}
                        >
                            <DeleteIcon />
                        </IconButton>
                        <Switch
                            checked={props.row.disabled}
                            onChange={() => props.onSwitchActiveState(props.row.id)}
                        />
                    </TableCell>
                )
            }
            <DialogConfirm
                open={openDialog}
                onClose={handleClickCloseDialog}
                onConfirm={handleClickConfirmDialog}
            />
        </Fragment>
    );
};

TableRowActionsCell.propTypes = {
    row: PropTypes.exact(PT.TABLE_ROW).isRequired,
    isEditMode: PropTypes.bool.isRequired,
    onSwitchActiveState: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    onClickStartEdit: PropTypes.func.isRequired,
    onClickCancelEdit: PropTypes.func.isRequired,
    onClickRemove: PropTypes.func.isRequired
};

export default withStyles(styles)(TableRowActionsCell);
