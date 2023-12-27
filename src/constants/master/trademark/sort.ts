import { DEFAULT_SORT, DEFAULT_SORT_LABEL, SortDirection } from 'src/constants/sort';
import { TSort } from 'src/types/sort';

export const TRADEMARK_SORT_OPTIONS: { value: TSort | string; label: string }[] = [
  { value: DEFAULT_SORT, label: DEFAULT_SORT_LABEL },
  {
    value: { field: 'trademark_code', direction: SortDirection.Asc },
    label: 'Kode Trademark Asc',
  },
  {
    value: { field: 'trademark_code', direction: SortDirection.Desc },
    label: 'Kode Trademark Desc',
  },
  {
    value: { field: 'trademark', direction: SortDirection.Asc },
    label: 'Trademark Asc',
  },
  {
    value: { field: 'trademark', direction: SortDirection.Desc },
    label: 'Trademark Desc',
  },
];
