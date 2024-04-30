import React, {useState} from 'react';
import get from 'lodash/get';
import reduce from 'lodash/reduce';

import { IFormProps } from './Form.types';

function Form (props:IFormProps) {
    const { children, onSubmit, autocomplete } = props;
    const [error, setError] = useState<string>('');

    const handlerSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
         // @ts-ignore
        const error = reduce([...evt.target],
            // @ts-ignore
            (error, formElem) => { 
                const errorText =  get(formElem, 'title', '');
                return error? error: errorText
            }
            , '') as string;
        setError(error);

        if (!error && onSubmit){
            onSubmit(evt);
        }
    }

    return (
        <form onSubmit={handlerSubmit} noValidate autoComplete={autocomplete} >
            {children}
        </form>
    )
}

export default Form;
