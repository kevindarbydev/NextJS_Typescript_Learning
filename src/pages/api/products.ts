import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../products';
import { Product } from '../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json(products);
}
