import { NextApiRequest, NextApiResponse } from 'next';
import { getPlayer } from '../../../../services/players/players.service';

/**
 * @swagger
 * /api/players/:id:
 *  get:
 *    tags: [Players]
 *    description: Returns Player
 *    responses:
 *      200:
 *        description: Player
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                player:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const id = req.query.id.toString();
      const player = await getPlayer(id);
      return res.status(200).json({ player });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
