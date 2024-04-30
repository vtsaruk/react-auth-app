type TVariant = 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2';


type TComponent = 'button'
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'span';

export interface ITypographyProps {
  variant?: TVariant;
  component?: TComponent;
  paragraph?: boolean;
  text?: string;
  className?: string; 
  children?: JSX.Element|JSX.Element[]; 
}