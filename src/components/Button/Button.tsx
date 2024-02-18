import { Check } from "@phosphor-icons/react";
import { ButtonThemed } from "./Button.styles";
import { ThemeProvider } from "styled-components";

export interface ButtonProps {
    theme: { text?: string; border?: string; background?: string, radius?: string };
    buttonText?: string;
    children?: any;
    icon?: boolean;
    disabled?: boolean;
    onButtonClick?: () => void;
}

export function Button(props: ButtonProps) {
    return (
        <ThemeProvider theme={props.theme}>
            <ButtonThemed
                onClick={props.onButtonClick}
                disabled={props.disabled}>
                {props.icon && <Check />}
                {props.children && props.children}
            </ButtonThemed>
        </ThemeProvider>
    );
}