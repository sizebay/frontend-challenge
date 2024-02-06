export interface ButtonProps {
  theme: { text: string; border: string; bg: string, radius?: string };
  buttonText?: string;
  children?: any;
  onButtonClick?: () => void;
}