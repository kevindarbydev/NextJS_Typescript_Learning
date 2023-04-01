import { NextPage } from 'next';
import Products from '../components/Products';
import Layout from '../components/Layout';
import { Product } from '../types';

type Props = {
  products: Product[];
};

const ProductPage: NextPage<Props> = ({ products }) => {
  const productsList: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is the description for product 1.',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is the description for product 2.',
      price: 19.99,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is the description for product 2.',
      price: 19.99,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is the description for product 2.',
      price: 19.99,
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'This is the description for product 2.',
      price: 19.99,
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'This is the description for product 2.',
      price: 19.99,
    },
  ];

  return (
    <Layout>
      <div className='text-center'>
        <Products products={productsList} />
      </div>
    </Layout>
  );
};

export default ProductPage;
