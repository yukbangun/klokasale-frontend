import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';

export const USERNAME_FILTER_FIELDS: TFilterField[] = [
  { type: EFilterType.Input, label: 'Username', field: 'username', placeholder: 'username' },
  { type: EFilterType.Input, label: 'Nama', field: 'name', placeholder: 'nama' },
];
