import { IllustrationNoAccess } from '@douyinfe/semi-illustrations';
import { Empty, Typography } from '@douyinfe/semi-ui';
import cn from 'classnames';
import { isNullish } from 'src/utils/nullish';

const { Title } = Typography;

type TProps = {
  description?: string | JSX.Element;
  className?: string;
  illustrationClassName?: string;
};

export default function NoPermissionDisplay(props: TProps) {
  const { description, className, illustrationClassName } = props;
  const hasDescription = !isNullish(description);

  const descriptionDisplay = hasDescription ? (
    description
  ) : (
    <Title heading={6}>Mohon maaf, Anda tidak memiliki otoritas untuk mengakses halaman ini</Title>
  );

  return (
    <Empty
      image={<IllustrationNoAccess className={cn(illustrationClassName)} />}
      description={descriptionDisplay}
      className={cn(className)}
    />
  );
}
