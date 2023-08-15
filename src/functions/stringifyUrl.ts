import { StringifyUrl } from '@/types/parseURL';

export const stringifyUrl = (item: StringifyUrl) =>
  encodeURIComponent(JSON.stringify(item));
