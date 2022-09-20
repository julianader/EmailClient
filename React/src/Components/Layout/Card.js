import * as React from 'react';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';



export const CardContainer = props => {
    return (
        <Card className="top">
            <Paper elevation={3} />
            {props.children}
        </Card>
    );
};
