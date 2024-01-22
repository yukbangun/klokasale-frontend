import { ESortDirection } from 'src/constants/sort';

export type TSort =
  | undefined
  | {
      field: string;
      direction?: ESortDirection;
    };

export type TSortOption = { value: TSort; label: string };
