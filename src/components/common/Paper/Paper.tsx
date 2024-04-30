import React from 'react'
import PaperComponent from '@mui/material/Paper';

import { IPaper } from './Paper.types';

const Paper = (props: IPaper):JSX.Element => {
    return (
        <PaperComponent>
            {props.children}
        </PaperComponent>
    )
}

export default Paper;