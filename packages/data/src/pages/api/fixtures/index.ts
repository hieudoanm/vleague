import { NextApiRequest, NextApiResponse } from 'next';
import { getFixtures } from '../../../services/fixtures/fixtures.service';

/**
 * @swagger
 * /api/fixtures:
 *  get:
 *    tags: [Fixtures]
 *    description: Get Fixtures
 *    responses:
 *      200:
 *        description: List of Fixtures
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
      const fixtures = await getFixtures();
      return res.status(200).json({ total: fixtures.length, data: fixtures });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
