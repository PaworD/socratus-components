export enum ButtonSize {
  NORMAL = 'normal',
  MEDIUM = 'medium',
  SMALL = 'small'
}

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TRANSPARENT = 'transparent'
}

export interface ButtonProps {
  label: string;
  flat: boolean;
  size: ButtonSize;
  theme: ButtonTheme
}