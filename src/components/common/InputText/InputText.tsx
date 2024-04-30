import React, { memo } from 'react'
import TextField from '@mui/material/TextField';
import get from 'lodash/get'

import { TInput } from './Input.types';

const InputText = (props: TInput):JSX.Element => {
    const {changeValue, rules, label, variant, defaultValue, name, errorMessage, ...rest } = props;

    const handleChange = (evt: object):void => {
      const value = get(evt, 'target.value', ''); 

      if (changeValue) {
        changeValue(name || '', value, rules);
      }
    }

    return (
        <div>
            <TextField
              {...rest}
              name={name}
              onChange={handleChange}
              onBlur={handleChange}
              error={!!errorMessage}
              label={(errorMessage || label || '')}
              variant={variant}
            />
        </div>
    )
}

export default memo(InputText);
