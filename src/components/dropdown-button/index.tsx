import { IconChevronDown } from '@douyinfe/semi-icons';
import { Button, Dropdown, Typography } from '@douyinfe/semi-ui';
import type { DropdownProps } from '@douyinfe/semi-ui/lib/es/dropdown';
import styles from './index.module.scss';
import cn from 'classnames';

const { Text } = Typography;

export type TDropdownButtonOption = { label: string; value: unknown };

type TProps = {
  value?: unknown;
  options: TDropdownButtonOption[];
  onChange: (value: unknown) => void;
  position?: DropdownProps['position'];
  btnText?: string;
  btnClassName?: string;
};

export default function ButtonDropdown(props: TProps) {
  const { value, options, onChange, position = 'bottomLeft', btnText, btnClassName } = props;

  const selectedOption = options?.find(opt => opt.value === value) ?? options[0];
  const selectedOptionText = selectedOption?.label;
  const renderBtnText = btnText || selectedOptionText;

  return (
    <Dropdown
      trigger={'click'}
      clickToHide
      position={position}
      render={
        <Dropdown.Menu>
          {options.map(option => (
            <Dropdown.Item key={option.label} onClick={() => onChange(option.value)} className={styles.dropdownItem}>
              <Text ellipsis={{ showTooltip: true }}>{option.label}</Text>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      }
    >
      <Button
        icon={<IconChevronDown className={styles.btnIcon} />}
        iconPosition="right"
        className={cn(styles.dropdownBtn, btnClassName)}
      >
        <Text ellipsis>{renderBtnText}</Text>
      </Button>
    </Dropdown>
  );
}
