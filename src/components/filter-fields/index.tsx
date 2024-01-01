import { Form } from '@douyinfe/semi-ui';
import { EFilterType } from 'src/constants/filter';
import { TFilterField } from 'src/types/filter';
import styles from './index.module.scss';

const { Input } = Form;

type TProps = {
  filterFields: TFilterField[];
  onFieldChange?: () => void;
};

export default function FilterFields(props: TProps) {
  const { filterFields, onFieldChange } = props;

  return (
    <div className={styles.filterFields}>
      {filterFields.map(filterField => {
        const { type, label, field, placeholder } = filterField;

        const commonProps = {
          label,
          field,
          key: field,
          fieldClassName: styles.filterField,
          onChange: onFieldChange,
        };

        switch (type) {
          case EFilterType.Input: {
            return <Input {...commonProps} placeholder={placeholder} />;
          }
          default:
            return <></>;
        }
      })}
    </div>
  );
}
