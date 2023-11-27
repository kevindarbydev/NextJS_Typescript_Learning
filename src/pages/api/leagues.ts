import { NextApiRequest, NextApiResponse } from 'next';
import hiscores, { getStatsByGamemode } from 'osrs-json-hiscores';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rsn } = req.query;
   
    const stats = await hiscores.getStatsByGamemode(rsn as string, 'seasonal');
    if (stats){
    res.status(200).json(stats);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving player stats, ' + error });
  }
}
