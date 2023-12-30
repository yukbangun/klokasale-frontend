import { ESortDirection } from 'src/constants/sort';

export type TSort =
  | string
  | {
      field: string;
      direction?: ESortDirection;
    };

export type TSortOption = { value: TSort; label: string };
