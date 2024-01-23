import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const SHOP_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Nama', field: 'name', placeholder: 'Nama' },
];
