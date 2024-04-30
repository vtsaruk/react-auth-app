import React from 'react';
import ButtonComponent from '@mui/material/Button';


import { IButtonProps } from './Button.types';

function Button (props: IButtonProps):JSX.Element {
    const { children, type, ...rest} = props;
    return (
        <ButtonComponent {...rest} type={type}>
            {children}
        </ButtonComponent>
    )
}

export default Button;