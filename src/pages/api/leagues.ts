import { NextApiRequest, NextApiResponse } from 'next';
import hiscores, { getStatsByGamemode } from 'osrs-json-hiscores';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { rsn } = req.query;
   
    const leaguePoints = await fetch(`http://localhost:3030/leaguePoints/${rsn}`)
    if (leaguePoints){
        res.status(200).send(leaguePoints);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving player stats, ' + error });
  }
}
