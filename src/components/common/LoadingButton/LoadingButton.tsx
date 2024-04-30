import React from 'react'
import LoadingButtonMui from '@mui/lab/LoadingButton';

import { ILoadingButtonProps} from './LoadingButton.types'

function LoadingButton (props: ILoadingButtonProps) {
    const { children, type, color, disabled, isLoading, onClick } = props;

    return(
        <LoadingButtonMui 
          type={type}
          loading={isLoading}
          variant="outlined"
          disabled={disabled}
          onClick={onClick}
        >
            {children}
        </LoadingButtonMui>
    )
}

export default LoadingButton;
