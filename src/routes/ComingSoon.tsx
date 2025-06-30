import EmptyState from '../components/EmptyState';

const Page = (props: { title: string; text?: string }) => {
  console.log('Page props:', props);
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
        title={`${props.title} Coming Soon`}
        text="We`re working in our new awesome functionalities. Stay tuned!"
        image="soon"
        button={{
          variant: 'primary',
          size: 'm',
          onClick: () => console.log('Button clicked'),
          children: 'Back to Home',
          iconLeft: 'A',
        }}
      />
    </div>
  );
};

export default Page;
