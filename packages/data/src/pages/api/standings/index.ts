import { NextApiRequest, NextApiResponse } from 'next';
import { getStandings } from '../../../services/standings/standings.service';
import { Tier } from '../../../types';

/**
 * @swagger
 * /api/standings:
 *  get:
 *    tags: [Standings]
 *    description: Get Standings
 *    responses:
 *      200:
 *        description: List of Standings
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                total:
 *                  type: integer
 *                data:
 *                  type: array
 *                  items:
 *                    type: object
 *                    properties:
 *                      id:
 *                        type: string
 */
const handler = async (req: NextApiRequest, response: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const competitionTier: Tier =
        (req.query.competitionTier as Tier) || Tier.TIER_ONE;
      const season: number =
        parseInt(req.query.season?.toString(), 10) || new Date().getFullYear();
      const standings = await getStandings({ competitionTier, season });
      return response
        .status(200)
        .json({ total: standings.length, data: standings });
    }
    return response.status(405);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export default handler;
