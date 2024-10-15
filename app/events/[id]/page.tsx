type SingleEventPageProps = {
  params: {
    id: string;
  };
};

export default function SingleEvent({ params }: SingleEventPageProps) {
  const { id } = params;

  return <h1>The event ID is {id}</h1>;
}
