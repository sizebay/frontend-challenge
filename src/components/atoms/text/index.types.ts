import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface TextProps extends TextStyles {
  children: ReactNode;
}

export interface TextStyles {
  weight?: CSSProperties['fontWeight'];
  size?: number;
}