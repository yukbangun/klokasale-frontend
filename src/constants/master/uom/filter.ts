import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const UOM_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Satuan', field: 'uomName', placeholder: 'Satuan' },
];
