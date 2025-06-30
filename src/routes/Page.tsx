import { MouseEvent } from 'react';
import ButtonProps from '@scaleiq/scaleiq-ui/dist/components/Button/interfaces';
import { EmptyStateInterface } from '@scaleiq/scaleiq-ui/dist/components/EmptyState/interfaces';
import EmptyState from '../components/EmptyState';

const Page = ({
  title,
  text,
  image,
  button,
}: {
  title: string;
  text: string;
  image: EmptyStateInterface['image'];
  button: ButtonProps;
}) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked');
    if (button.onClick) {
      button.onClick(e);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <EmptyState
        title={`${title}`}
        text={text}
        image={image}
        button={{
          variant: button.variant ? button.variant : 'primary',
          size: button.size ? button.size : 'm',
          onClick: (e: MouseEvent<HTMLButtonElement>) => handleClick(e),
          children: button.children,
          iconLeft: button.iconLeft,
        }}
      />
    </div>
  );
};

export default Page;
