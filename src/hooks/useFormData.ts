import {useState, useRef } from 'react';
import validateInputValue, {IValidateInput} from '../helpers/validateInputValue';


type TValues = Record<string, string | null>;
type TErrors = Record<string, string>;

interface IRef {
  changeValue: (key: string, value: string | null) => void,
  resetValues: () => void;
  toIsDisable: (values: TValues) => boolean;
}

export const useFormData = (values: TValues) => {
  const [formValues, setFormValues] = useState<TValues>({...values});
  const [errors, setErrors] = useState<TErrors>({});


  const toIsDisable = (values: TValues) => {
    console.log('formValues', formValues);
    return Object.keys(values).filter(key => values[key] === null).length > 0;
  }

  const changeValue = (key: string, value: string | null, rules?: IValidateInput[]): void => {
    let errorMessage: string | null = null;
    if (value === null && formValues[key] === null) {
      return;
    }

    if (rules) {
      errorMessage = validateInputValue(value||'', rules) || '';
      setErrors(errors => ({...errors, [key]: errorMessage || '' })); 
    }
  
    if (errorMessage) {
      setFormValues(currentValues => ({ ...currentValues, [key]: null }));
      
      return;
    }
      
    setFormValues(currentValues => ({ ...currentValues, [key]: value }));
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resetValues = () => useState(values);

  const ref = useRef<IRef>({
    changeValue,
    resetValues,
    toIsDisable,
  });

  return { values: formValues, errors, utils: ref.current  };
}
