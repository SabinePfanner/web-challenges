import { useRouter } from "next/router";
import useSWR from "swr";

export async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function ProductDetailPageInfo() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  if (error) {
    return <div>Could not fetch data</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return;
  }
  return (
    <>
      <ul>
        <li key={data.id}>{data.name}</li>
      </ul>
    </>
  );
}
