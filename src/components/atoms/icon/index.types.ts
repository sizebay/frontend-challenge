const availableIcons = {
  search: 'search',
  close: 'close',
  add: 'add',
  remove: 'remove',
  check: 'check',
} as const

export type IconsAvailable = keyof typeof availableIcons;

export interface IconProps {
  type: IconsAvailable;
}