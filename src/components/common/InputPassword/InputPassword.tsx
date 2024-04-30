import React from 'react'
import InputPasswordComponent from '@mui/material/Input';

import {IInputPassword } from './InputPassword.types'


const InputPassword = (props: IInputPassword): JSX.Element => {

    return (
        <InputPasswordComponent type="password" {...props} />
    )
}


export default InputPassword;