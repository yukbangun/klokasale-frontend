import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const SUPPLIER_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Nama Supplier', field: 'supplierName', placeholder: 'Nama supplier' },
];
