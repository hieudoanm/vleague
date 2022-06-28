import { NextApiRequest, NextApiResponse } from 'next';
import { getStanding } from '../../../../services/standings/standings.service';
import { Tier } from '../../../../types';

/**
 * @swagger
 * /api/standings/:id:
 *  get:
 *    tags: [Standings]
 *    description: Returns Standing
 *    responses:
 *      200:
 *        description: Standing
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                standing:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const competitionTier: Tier =
        (req.query.competitionTier as Tier) || Tier.TIER_ONE;
      const season: number =
        parseInt(req.query.season?.toString(), 10) || new Date().getFullYear();
      const teamId: string = req.query.id.toString();
      const standing = await getStanding({ competitionTier, season, teamId });
      return res.status(200).json({ standing });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
