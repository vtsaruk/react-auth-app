export interface ILoadingButtonProps {
    urlKey:string;
    children: JSX.Element;
    type: 'submit' | 'reset' | 'button';
    color?: 'inherit' 
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
        | string;
    disabled?: boolean;
    onClick: () => void;
    isLoading?: boolean;
}
