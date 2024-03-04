import { KeyboardEvent } from "react";
import { InputSizes } from "../../../models/styling";
import { IconsAvailable } from "../icon/index.types";

export interface TextfieldProps {
  iconSuffix?: IconsAvailable;
  onFocus?: () => void;
  onChange?: (value: string, name: string) => void;
  onBlur?: (value: string, name: string) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  size?: InputSizes;
  value?: string;
  popover?: string;
}

export interface TextfieldStyle {
  size: InputSizes;
}