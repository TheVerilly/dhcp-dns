import React from 'react';
import PropTypes from 'prop-types';

import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle, Typography,
} from '@material-ui/core';

const DialogConfirm = props => (
    <Dialog open={props.open} onClose={props.onClose}>
        <DialogTitle>
            <Typography align="center">Remove?</Typography>
        </DialogTitle>
        <DialogActions>
            <Button onClick={props.onConfirm} color="secondary">Ok</Button>
            <Button onClick={props.onClose} color="primary">Cancel</Button>
        </DialogActions>
    </Dialog>
);

DialogConfirm.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};

export default DialogConfirm;
