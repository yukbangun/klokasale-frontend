import { DEFAULT_SORT, DEFAULT_SORT_LABEL, ESortDirection } from 'src/constants/sort';
import { TSortOption } from 'src/types/sort';

export const SUPPLIER_SORT_OPTIONS: TSortOption[] = [
  { value: DEFAULT_SORT, label: DEFAULT_SORT_LABEL },
  {
    value: { field: 'supplierName', direction: ESortDirection.Asc },
    label: 'Nama Supplier Asc',
  },
  {
    value: { field: 'supplierName', direction: ESortDirection.Desc },
    label: 'Nama Supplier Desc',
  },
];
