import { GetStaticProps } from 'next';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type Props = {
  products: Product[];
};

const Products = ({ products }: Props) => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch('https://my-api.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
