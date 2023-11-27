import { NextApiRequest, NextApiResponse } from 'next';
import hiscores, { getStats } from 'osrs-json-hiscores';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    var { rsn } = req.query;
   const stats = await fetch(`http://localhost:3030/stats/${rsn}`)
    if (stats){
        res.status(200).send(stats);
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving player stats, ' + error });
  }
}
