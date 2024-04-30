import React from 'react';
import AlertMui from '@mui/material/Alert';

import { IAlertProps } from './Alert.types';
import removeNotification from '../../../core/providers/notifications/actions/removeNotification';


export function Alert (props:IAlertProps): JSX.Element {
    const { description, title, id, type } = props;
    
    const handleClose = () => {
        console.log('handleClose')
        removeNotification(id);
    };

    return (
       <AlertMui onClose={handleClose} severity={type}>{title} - {description}</AlertMui>
    )
} 

export default Alert;