import type { NextApiRequest, NextApiResponse } from 'next';

import { Product } from '../../types';

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200);
}
