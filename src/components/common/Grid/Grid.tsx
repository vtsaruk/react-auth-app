import React from 'react';
import GridComponent from '@mui/material/Grid';

import { IGrid } from './Grid.types';

const Grid = (props:IGrid): JSX.Element => {
    const {children, container, ...rest } = props;

    return (
       <GridComponent container={container} {...rest}>
        {children}
       </GridComponent>   
    )
} 

export default Grid;
