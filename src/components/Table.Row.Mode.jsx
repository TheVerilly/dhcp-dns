import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
    TableCell, TextField
} from '@material-ui/core';

const TableRowMode = props => {
    return (
        <Fragment>
            {
                props.isEditMode ? (
                    <Fragment>
                        <TableCell>
                            <TextField variant="outlined" value={props.row.ipAddress} />
                        </TableCell>
                        <TableCell>
                            <TextField variant="outlined" value={props.row.domain} />
                        </TableCell>
                    </Fragment>
                ) : (
                    <Fragment>
                        <TableCell>{props.row.ipAddress}</TableCell>
                        <TableCell>{props.row.domain}</TableCell>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

TableRowMode.propTypes = {
    row: PropTypes.exact({
        id: PropTypes.number,
        ipAddress: PropTypes.string,
        domain: PropTypes.string,
    })
};

export default TableRowMode;
