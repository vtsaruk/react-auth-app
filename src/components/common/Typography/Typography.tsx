import React from 'react'
import TypographyComponent from '@mui/material/Typography'

import { ITypographyProps} from './Typography.types'

function Typography (props:ITypographyProps): JSX.Element {
    const {variant, component, text, children} = props;
    
    return (
        <TypographyComponent
            variant={variant}
            // @ts-ignore
            component={component}
        >
            {text}
            {children}
        </TypographyComponent>
    )
}

export default Typography;