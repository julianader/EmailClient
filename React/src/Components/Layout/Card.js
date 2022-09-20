import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export const CardContainer = props => {
    return (
        <Box sx={{m:3}}>
        <Card className="top">
            <Box sx={{p:2}}>
            {props.children}
            </Box>
        </Card>
        </Box>
    );
};
