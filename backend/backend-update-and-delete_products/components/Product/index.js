import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { useState } from "react";
import ProductForm from "../ProductForm";
import { StyledButton } from "../Button/Button.styled";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }
    if (response.ok) {
      mutate();
      event.target.reset();
      setIsEditMode(!isEditMode);
    }
  }

  async function handleDeleteProduct(id) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      await response.json();
      router.push("/");
    }
    if (!response.ok) {
      console.error(response.status);
      return;
    }
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}
      <StyledLink href="/">Back to all fish</StyledLink>
      <StyledButton
        type="button"
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit fish
      </StyledButton>
      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          isEditMode={true}
          value={data}
        />
      )}
      <StyledButton
        type="button"
        onClick={() => {
          handleDeleteProduct(id);
        }}
        hidden={isEditMode}
      >
        Delete fish
      </StyledButton>
    </ProductCard>
  );
}
