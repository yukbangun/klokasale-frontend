import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const TRADEMARK_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Kode Trademark', field: 'kode_trademark', placeholder: 'kode trademark' },
  { type: EFilterType.Input, label: 'Trademark', field: 'trademark', placeholder: 'trademark' },
];
