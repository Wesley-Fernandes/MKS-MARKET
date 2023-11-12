import { useQuery } from "react-query";
import Card from "../Card";
import { Products } from "../Structure";
import CardLoading from "../CardLoading";
interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export default function ProductList() {
  const fetchData = async () => {
    const response = await fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };

  const { data, isLoading, error } = useQuery("products", fetchData);

  if (isLoading) {
    return (
      <Products>
        {Array.from({ length: 8 }).map((_, index) => (
          <CardLoading key={index} />
        ))}
      </Products>
    );
  }

  if (error) {
    return <p>Error: {String(error)}</p>;
  }

  return (
    <Products>
      {data.products.map((product: IProduct) => (
        <Card
          key={product.id}
          brand={product.brand}
          description={product.description}
          id={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </Products>
  );
}
