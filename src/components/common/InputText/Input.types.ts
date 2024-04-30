import {IValidateInput} from '../../../helpers/validateInputValue';

export interface TInput {
  className?: string;
  id?: string;
  type?: string;
  name?: string;
  changeValue: (key: string, value: string | null, rules?: IValidateInput[]) => void;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  rules?: IValidateInput[]
  defaultValue?: string;
  helperText?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  errorMessage?: string;
  autoCapitalize?: "off";
  autoComplete?: "off"; 
}
