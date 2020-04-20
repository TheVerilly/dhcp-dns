import React, { useEffect, useState } from 'react';

import { Box } from '@material-ui/core';

import Table from './components/Table';

const initialData = [
    { id: 1, ip: '255.255.248.0', domain: 'example.com', mac: '00:11:22:33:AA:BB', disabled: false },
    { id: 2, ip: '255.255.255.128', domain: 'example.net', mac: '00:11:22:33:AA:BB', disabled: false },
    { id: 3, ip: '255.255.255.224', domain: 'example.some.org', mac: '00:11:22:33:AA:BB', disabled: true },
    { id: 4, ip: '255.255.255.248', domain: 'example.edu', mac: '00:11:22:33:AA:BB', disabled: false },
];

const emulationRequest = () => new Promise(resolve => setTimeout(() => {
    resolve(initialData);
}, 2000));

const App = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        emulationRequest(setLoading).then(resData => {
            setLoading(false);
            setData(resData);
        });
    }, []);

    return (
        <Box p={3}>
            <Table isLoading={isLoading} data={data} />
        </Box>
    );
};

export default App;
