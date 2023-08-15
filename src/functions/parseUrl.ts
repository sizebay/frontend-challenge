import { ParseURL } from '@/types/parseURL';

export const parseURL = ({ slug }: ParseURL) =>
  JSON.parse(decodeURIComponent(slug));
