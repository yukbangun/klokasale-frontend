import { IllustrationFailure } from '@douyinfe/semi-illustrations';
import { Button, Empty, Typography } from '@douyinfe/semi-ui';
import cn from 'classnames';
import styles from './index.module.scss';
import { isNullish } from 'src/utils/nullish';

const { Title } = Typography;

type TProps = {
  description?: string | JSX.Element;
  className?: string;
  illustrationClassName?: string;
  onClickRetry?: () => void;
};

export default function ErrorDisplay(props: TProps) {
  const { description, className, illustrationClassName, onClickRetry } = props;
  const hasDescription = !isNullish(description);
  const hasOnClickRetry = !isNullish(onClickRetry);

  const descriptionDisplay = hasDescription ? (
    description
  ) : hasOnClickRetry ? (
    <div className={styles.defaultDescriptionWithRetryContainer}>
      <Title heading={6}>Terjadi kesalahan, mohon coba lagi</Title>
      <Button onClick={onClickRetry} theme="solid" className={styles.retryBtn}>
        Coba lagi
      </Button>
    </div>
  ) : (
    <Title heading={6}>Terjadi kesalahan</Title>
  );

  return (
    <Empty
      image={<IllustrationFailure className={cn(illustrationClassName)} />}
      description={descriptionDisplay}
      className={cn(className)}
    />
  );
}
