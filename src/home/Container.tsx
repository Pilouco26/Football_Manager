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
                    src="https://vemaps.com/uploads/img/big/dk-03.jpg"
                    alt="Map"
                    sx={{
                        width: '100%',  // Make the image fit the container
                        height: 'auto', // Maintain the aspect ratio
                        borderRadius: '8px', // Optional: Add some border radius
                        boxShadow: 3 // Optional: Add a shadow for some depth
                    }}
                />
            </Container>
        </React.Fragment>
    );
}
