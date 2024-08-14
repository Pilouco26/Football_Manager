import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SimpleContainer from "./Container";
import AppBar from "@mui/material/AppBar";
import ResponsiveAppBar from "./AppBar";
import CoachView from "../coach/CoachView";

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

export default function Home() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column'}}>
            <ResponsiveAppBar />
            {/*<Box sx={{flex: 1}}>*/}
            {/*    <Box*/}
            {/*        component="img"*/}
            {/*        src="https://www.infobae.com/new-resizer/ZAlhD43Ox6hyAun0dXBzh3c1-Jk=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JAXUMTHU5BEA5CYPZZKJF2DPYM.jpg"*/}
            {/*        alt="Map"*/}
            {/*        sx={{*/}
            {/*            width: '100%',*/}
            {/*            height: '100%',*/}
            {/*            objectFit: 'cover'*/}
            {/*        }}*/}
            {/*    />*/}

            {/*</Box>*/}
            <CoachView></CoachView>
        </Box>
    );
}
