import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const USER_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Username', field: 'username', placeholder: 'Username' },
  { type: EFilterType.Input, label: 'Nama', field: 'name', placeholder: 'Nama' },
];
