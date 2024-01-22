import { DEFAULT_SORT, DEFAULT_SORT_LABEL, ESortDirection } from 'src/constants/sort';
import { TSortOption } from 'src/types/sort';

export const TRADEMARK_SORT_OPTIONS: TSortOption[] = [
  { value: DEFAULT_SORT, label: DEFAULT_SORT_LABEL },
  {
    value: { field: 'trademarkCode', direction: ESortDirection.Asc },
    label: 'Kode Trademark Asc',
  },
  {
    value: { field: 'trademarkCode', direction: ESortDirection.Desc },
    label: 'Kode Trademark Desc',
  },
  {
    value: { field: 'trademark', direction: ESortDirection.Asc },
    label: 'Trademark Asc',
  },
  {
    value: { field: 'trademark', direction: ESortDirection.Desc },
    label: 'Trademark Desc',
  },
];
