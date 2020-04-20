import React from 'react';
import PropTypes from 'prop-types';

import { Box, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import useBindFields from '../hook/useBindFields';
import { ROW_FIELDS } from '../settings';

const Field = withStyles({
    root: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        '& .MuiInputBase-input': {
            color: 'white',
        }
    }
})(TextField);

const PanelCreatingRow = props => {
    const { values, updateValues } = useBindFields(ROW_FIELDS);

    const handleChangeCreateField = event => {
        updateValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        props.onClickSave(values);
        updateValues(ROW_FIELDS);
    };

    const handleReset = () => {
        updateValues(ROW_FIELDS);
    };

    return (
        <Box width={900} display="flex" justifyContent="space-between">
            <Field
                autoFocus
                required
                label="Domain"
                variant="outlined"
                size="small"
                name="domain"
                value={values.domain}
                onChange={handleChangeCreateField}

            />
            <Field
                required
                variant="outlined"
                label="IP"
                size="small"
                name="ip"
                value={values.ip}
                onChange={handleChangeCreateField}
            />
            <Field
                required
                variant="outlined"
                label="MAC"
                size="small"
                name="mac"
                value={values.mac}
                onChange={handleChangeCreateField}
            />
            <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
            <Button onClick={handleReset} variant="contained" color="secondary">Reset</Button>
        </Box>
    );
};

PanelCreatingRow.propTypes = {
    onClickSave: PropTypes.func.isRequired
};

export default PanelCreatingRow;
