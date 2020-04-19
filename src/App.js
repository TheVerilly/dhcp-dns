import React, { StrictMode, useEffect, useState } from 'react'

import { Box } from '@material-ui/core';

import Table from './components/Table'

const initialData = [
    { id: 1, ipAddress: '255.255.248.0', domain: 'example.com', disabled: false },
    { id: 2, ipAddress: '255.255.255.128', domain: 'example.net', disabled: false },
    { id: 3, ipAddress: '255.255.255.224', domain: 'example.some.org' , disabled: true },
    { id: 4, ipAddress: '255.255.255.248', domain: 'example.edu', disabled: false },
];

const emulationRequest = () => new Promise(resolve => setTimeout(() => {
    resolve(initialData);
}, 2000))

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        emulationRequest(setLoading).then(resData => {
            setLoading(false);
            setData(resData);
        })
    }, []);

    return (
        <StrictMode>
            <Box p={3}>
                <Table isLoading={isLoading} data={data} />
            </Box>
        </StrictMode>
    );
};

export default App;
