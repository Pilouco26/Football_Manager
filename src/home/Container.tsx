import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function SimpleContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    component="img"
                    src="https://www.infobae.com/new-resizer/ZAlhD43Ox6hyAun0dXBzh3c1-Jk=/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/JAXUMTHU5BEA5CYPZZKJF2DPYM.jpg"
                    alt="Map"
                />
            </Container>
        </React.Fragment>
    );
}
