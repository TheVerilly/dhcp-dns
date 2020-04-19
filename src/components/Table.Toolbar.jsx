import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, LinearProgress, Typography, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Add as AddIcon } from '@material-ui/icons';

const styles = () => ({
    toolbar: {
        position: 'relative',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between'
    },
    linearProgress: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        borderRadius: '4px 4px 0 0',
    }
});

const TableToolbar = props => (
    <Toolbar className={props.classes.toolbar}>
        {props.isLoading && <LinearProgress className={props.classes.linearProgress} />}
        <Typography variant="subtitle1">DHCP-DNS</Typography>
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
    </Toolbar>
);

TableToolbar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableToolbar);
