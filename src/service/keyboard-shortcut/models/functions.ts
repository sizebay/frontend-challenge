export interface ListenKeyboard {
  key: string;
  altKey: boolean;
  ctrlKey: boolean;
  isTrusted: boolean;
  shiftKey: boolean;
  type: string;
  preventDefault: () => void;
  keyCode?: number
}

export interface KeyboardOptions {
  preventDefault?: boolean;
  pressCtrl?: boolean;
  pressMeta?: boolean;
  pressShift?: boolean;
  pressAlt?: boolean;
  pressControl?: boolean;
}