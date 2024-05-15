import useSWR from "swr";

export default function HomePage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/random-character/", fetcher);
  if (error) return <div>Could not load data</div>;
  if (isLoading) return <div>Is loading...</div>;
  if (!data) return;
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <li key={key}>
          <strong>{key}: </strong> {value}
        </li>
      ))}
    </>
  );
}
