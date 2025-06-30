import { useNavigate } from 'react-router-dom';
import { EmptyState } from '@scaleiq/scaleiq-ui';
import ButtonProps from '@scaleiq/scaleiq-ui/dist/components/Button/interfaces';
import { EmptyStateInterface } from '@scaleiq/scaleiq-ui/dist/components/EmptyState/interfaces';
import styles from './EmptyState.module.css';

const EmptyStateComponent = (props: {
  title: string;
  text: string;
  button: ButtonProps;
  image?: EmptyStateInterface['image'];
}) => {
  const { title, text, button } = props;
  const navigate = useNavigate();
  return (
    <section className={styles.emptyStateContainer}>
      <EmptyState
        title={title}
        text={text}
        image={props.image}
        color="blue"
        button={{
          variant: button.variant ? button.variant : 'primary',
          size: button.size ? button.size : 'm',
          onClick: () => navigate('/'),
          children: button.children,
          iconLeft: button.iconLeft,
        }}
      />
    </section>
  );
};

export default EmptyStateComponent;
