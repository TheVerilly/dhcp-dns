import React from 'react';
import PropTypes from 'prop-types';

import { Toolbar, LinearProgress, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Add as AddIcon, Close as CloseIcon, DeleteForever as DeleteForeverIcon } from '@material-ui/icons';

import PanelCreatingRow from './PanelCreatingRow';

const styles = () => ({
    toolbar: {
        position: 'relative',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        background: '#35445a',
    },
    buttonCreate: {
        color: '#333333',
        background: '#93ecdc',
        '&:hover': {
            background: '#00f8cb',
        }
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
            <Fab disabled={true} size="small" color="secondary">
                <DeleteForeverIcon />
            </Fab>

            {props.creatableMode && (
                <PanelCreatingRow onClickSave={props.onClickSave} />
            )}

                <Fab
                    className={classes.buttonCreate}
                    size="medium"
                    onClick={handleToggleCreateMode}
                >
                    {props.creatableMode ? (<CloseIcon />) : (<AddIcon />)}
                </Fab>
        </Toolbar>
    );
};

TableToolbar.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    creatableMode: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    onClickToggleCreateMode: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
};

export default withStyles(styles)(TableToolbar);
