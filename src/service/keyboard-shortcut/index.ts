import { KeyboardOptions, ListenKeyboard } from "./models/functions";
import { KeysMapped } from "./models/key";


export function listenKeyboard(e: ListenKeyboard, options?: KeyboardOptions) {
  if (options?.preventDefault) {
    e.preventDefault();
  }
  const { key } = e;

  return `Key: ${key} (${e.keyCode}) || CRTL / CMD PRESSED: ${e.ctrlKey} || SHIFT / CTRL PRESSED: ${e.shiftKey} `;
}

export const handleKeyboardListener = (e: KeyboardEvent, key: KeysMapped, options: KeyboardOptions | null, callback: (...args: any) => void) => {
  const hasAltKey = options?.pressAlt ?? false;
  const hasCtrlKey = (options?.pressCtrl || options?.pressMeta) ?? false;
  const hasShiftKey = options?.pressShift ?? false;

  const currKey = e.key.toLowerCase();

  if (currKey === key && e.altKey === hasAltKey && e.ctrlKey === hasCtrlKey && e.shiftKey === hasShiftKey) {
    callback();
  }
}