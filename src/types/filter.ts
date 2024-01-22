import { EFilterType } from 'src/constants/filter';

export type TFilterField = {
  label: string;
  field: string;
  type: EFilterType;
  placeholder: string;
};
