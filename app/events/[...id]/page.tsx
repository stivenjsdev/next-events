type EventsPageProps = {
  params: {
    id: string[];
  };
};

export default function Events({ params }: EventsPageProps) {
  return (
    <>
      <h1>The Segments of the page 2</h1>
      <pre>{params.id.toString()}</pre>
    </>
  );
}
