import { NextApiRequest, NextApiResponse } from 'next';
import { getTeam } from '../../../../services/teams/teams.service';

/**
 * @swagger
 * /api/teams/:id:
 *  get:
 *    tags: [Teams]
 *    description: Returns Team
 *    responses:
 *      200:
 *        description: Team
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                team:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const id = req.query.id.toString();
      const team = await getTeam(id);
      return res.status(200).json({ team });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
