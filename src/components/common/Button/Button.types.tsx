export interface IButtonProps {
    disabled?: boolean;
    children: JSX.Element;
    type: "submit" | 'reset' | 'button';
    onClick: () => void;
}
