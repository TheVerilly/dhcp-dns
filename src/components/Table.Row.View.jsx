import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { TableCell, TextField } from '@material-ui/core';

import PT from '../prop-types';

const TableRowView = props => (
    <Fragment>
        {
            props.isEditMode ? (
                <Fragment>
                    <TableCell>
                        <TextField
                            name="domain"
                            variant="outlined"
                            value={props.editableRow['domain']}
                            onChange={props.onChangeField}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            name="ip"
                            variant="outlined"
                            value={props.editableRow['ip']}
                            onChange={props.onChangeField}
                        />
                    </TableCell>
                    <TableCell>
                        <TextField
                            name="ip"
                            variant="outlined"
                            value={props.editableRow['mac']}
                            onChange={props.onChangeField}
                        />
                    </TableCell>
                </Fragment>
            ) : (
                <Fragment>
                    <TableCell>{props.row.domain}</TableCell>
                    <TableCell>{props.row.ip}</TableCell>
                    <TableCell>{props.row.mac}</TableCell>
                </Fragment>
            )
        }
    </Fragment>
);

TableRowView.propTypes = {
    row: PropTypes.exact(PT.TABLE_ROW),
    editableRow: PropTypes.exact(PT.TABLE_ROW),
    onChangeField: PropTypes.func.isRequired,
};

export default TableRowView;
