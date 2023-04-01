import { Product } from '../types';
import Button from '@material-ui/core/Button';

type Props = {
  products: Product[];
};

const Products = ({ products }: Props) => {
  return (
   <div className="grid grid-cols-3 gap-2">
      {products.map((product) => (
        <div key={product.id} className="border rounded-md p-4 w-full sm:w-1/2 md:w-1/3 
        my-8 ml-36"  style={{ backgroundColor: "rgba(51, 51, 51, 0.4)" }}>
          <h2 className='underline text-2xl mb-2'>{product.name}</h2>
          <p>{product.description}</p>
          <p className='mb-4'>${product.price.toFixed(2)}</p>
          <Button className='my-4' variant='outlined'>Buy now</Button>
        </div>
      ))}
    </div>
  );
};

export default Products;
