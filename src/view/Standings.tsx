import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


import ReactVirtualizedTable, {DataProps} from "./Table";
import ResponsiveAppBar from '../home/AppBar';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{p: 3}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function TwoThousandTwenty({year}: DataProps) {

    return (
        <Box sx={{width: '100%'}}>
            <ResponsiveAppBar></ResponsiveAppBar>
            <ReactVirtualizedTable year={year}></ReactVirtualizedTable>
        </Box>

    );
}