import { NextApiRequest, NextApiResponse } from 'next';
import { getPlayers } from '../../../services/players/players.service';

/**
 * @swagger
 * /api/players:
 *  get:
 *    tags: [Players]
 *    description: Get Players
 *    responses:
 *      200:
 *        description: List of Players
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
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const skip: number = parseInt(req.query.skip?.toString() || '0', 10);
      const limit: number = parseInt(req.query.limit?.toString() || '50', 10);
      const teamId: string = req.query.teamId?.toString();
      const players = await getPlayers({ skip, limit, teamId });
      return res.status(200).json({ total: players.length, data: players });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
