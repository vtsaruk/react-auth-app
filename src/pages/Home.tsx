import React from 'react';
import { Box, Typography } from '../components/common'
import { Logout } from '../components/Logout';

import { useUser } from '../core/providers/users';


const Home = () => {
    const { displayName } = useUser();
    
    return (
        <Box flexDirection="column" display="flex" >
            <Box justifyContent="space-around" display="flex"  alignItems="center" height="100px">
                <Typography component="h5" text={`Welcome ${displayName}`} />
                <Logout />
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography component="h2" text="This is the home page." />
            </Box>
        </Box>
    )
}

export default Home;
