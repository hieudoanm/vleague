import { NextApiRequest, NextApiResponse } from 'next';
import { getTeams } from '../../../services/teams/teams.service';

/**
 * @swagger
 * /api/teams:
 *  get:
 *    tags: [Teams]
 *    description: Get Teams
 *    responses:
 *      200:
 *        description: List of Teams
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
      const teams = await getTeams();
      return res.status(200).json({ total: teams.length, data: teams });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
