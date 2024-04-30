import React from 'react'
import { IFieldItem } from './FieldItem.types';
import FormControl from "@mui/material/FormControl";


const FieldItem = (props:IFieldItem):JSX.Element => {
    return (
        <FormControl>
            {props.children}
        </FormControl>
    )
}

export default FieldItem;