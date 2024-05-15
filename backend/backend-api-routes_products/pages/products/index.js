import useSWR from "swr";

export async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function ProductList() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);
  console.log(products);
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
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>;
        })}
      </ul>
    </>
  );
}
