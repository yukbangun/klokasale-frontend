import { SortDirection } from 'src/constants/sort';

export type TSort = {
  field: string;
  direction?: SortDirection;
};
