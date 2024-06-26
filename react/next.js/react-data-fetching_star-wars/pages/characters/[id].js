import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`
  );
  if (error) return <div>Something went wrong</div>;
  if (isLoading) return <div>Still loading...</div>;
  console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
