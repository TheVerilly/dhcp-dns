import React, { StrictMode, useEffect, useState } from 'react'

import { Box } from '@material-ui/core';

import Table from './components/Table'

const initialData = [
    { id: 1, ipAddress: '255.255.248.0', domain: 'example.com' },
    { id: 2, ipAddress: '255.255.255.128', domain: 'example.net' },
    { id: 3, ipAddress: '255.255.255.224', domain: 'example.some.org' },
    { id: 4, ipAddress: '255.255.255.248', domain: 'example.edu' },
];

const emulationRequest = loading => {
    loading(true);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(initialData);
        }, 500);
    })
}

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
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
