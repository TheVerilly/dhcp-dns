import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {Button, IconButton, Switch, TableCell} from '@material-ui/core';
import {Delete as DeleteIcon, Edit as EditIcon} from '@material-ui/icons';
import { withStyles } from '@material-ui/styles';

const styles = () => ({
    cellActions: {
        width: 200,
        '& > button:not(:last-child)': {
            marginRight: 20
        }
    }
});

const TableRowActionsCell = props => (
    <Fragment>
        {
            props.isEditMode ? (
                <Fragment>
                    <TableCell align="center" className={props.classes.cellActions}>
                        <Button onClick={props.onClickSave} variant="contained" color="primary">Save</Button>
                        <Button onClick={props.onClickCancel} variant="contained" color="secondary">Cancel</Button>
                    </TableCell>
                </Fragment>
            ) : (
                <TableCell align="center" className={props.classes.cellActions}>
                    <IconButton onClick={props.onClickEdit} color="primary"><EditIcon /></IconButton>
                    <IconButton onClick={props.onClickRemove} color="secondary"><DeleteIcon /></IconButton>
                    <Switch checked={true} onChange={props.onSwitchActiveState} />
                </TableCell>
            )
        }
    </Fragment>
);

TableRowActionsCell.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    onClickEdit: PropTypes.func.isRequired,
    onClickCancel: PropTypes.func.isRequired
};

export default withStyles(styles)(TableRowActionsCell);
