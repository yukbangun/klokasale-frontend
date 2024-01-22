import { DEFAULT_SORT, DEFAULT_SORT_LABEL, ESortDirection } from 'src/constants/sort';
import { TSortOption } from 'src/types/sort';

export const USER_SORT_OPTIONS: TSortOption[] = [
  { value: DEFAULT_SORT, label: DEFAULT_SORT_LABEL },
  {
    value: { field: 'username', direction: ESortDirection.Asc },
    label: 'Username Asc',
  },
  {
    value: { field: 'username', direction: ESortDirection.Desc },
    label: 'Username Desc',
  },
  {
    value: { field: 'name', direction: ESortDirection.Asc },
    label: 'Nama Asc',
  },
  {
    value: { field: 'name', direction: ESortDirection.Desc },
    label: 'Nama Desc',
  },
];
