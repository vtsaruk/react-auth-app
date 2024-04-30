import React from 'react';
import { Box, Button, Typography } from '../common';
import  logout from '../../core/services/logout';

function Logout () {  
    return (
        <Box>
            <Button onClick={logout} type="button">
                <Typography text="Logout" />
            </Button>
        </Box>
    )
}

export default Logout;
