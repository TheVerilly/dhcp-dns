import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, LinearProgress, Typography, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Add as AddIcon, Close as CloseIcon } from '@material-ui/icons';

import PanelCreatingRow from './PanelCreatingRow';

const styles = () => ({
    toolbar: {
        position: 'relative',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        background: '#35445a',
    },
    title: {
        color: 'white',
    },
    linearProgress: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        borderRadius: '4px 4px 0 0',
    }
});

const TableToolbar = ({ classes, ...props }) => {
    const handleToggleCreateMode = () => {
        props.onClickToggleCreateMode(!props.creatableMode);
    };

    return (
        <Toolbar className={classes.toolbar}>
            {props.isLoading && <LinearProgress className={classes.linearProgress} />}
            <Typography className={classes.title} variant="subtitle1">DHCP-DNS</Typography>

            {props.creatableMode && (
                <PanelCreatingRow onClickSave={props.onClickSave} />
            )}

            <Fab color="primary" onClick={handleToggleCreateMode}>
                {props.creatableMode ? (<CloseIcon />) : (<AddIcon />)}
            </Fab>
        </Toolbar>
    );
}

TableToolbar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    creatableMode: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    onClickToggleCreateMode: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableToolbar);
