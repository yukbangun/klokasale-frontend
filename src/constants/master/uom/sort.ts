import { DEFAULT_SORT, DEFAULT_SORT_LABEL, ESortDirection } from 'src/constants/sort';
import { TSortOption } from 'src/types/sort';

export const UOM_SORT_OPTIONS: TSortOption[] = [
  { value: DEFAULT_SORT, label: DEFAULT_SORT_LABEL },
  {
    value: { field: 'uomName', direction: ESortDirection.Asc },
    label: 'Satuan Asc',
  },
  {
    value: { field: 'uomName', direction: ESortDirection.Desc },
    label: 'Satuan Desc',
  },
];
