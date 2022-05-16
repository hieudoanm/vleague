import { NextApiRequest, NextApiResponse } from 'next';
import { getFixture } from '../../../../services/fixtures/fixtures.service';

/**
 * @swagger
 * /api/fixtures/:id:
 *  get:
 *    tags: [Fixtures]
 *    description: Returns Fixture
 *    responses:
 *      200:
 *        description: Fixture
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                fixture:
 *                  type: object
 *                  properties:
 *                    id:
 *                      type: string
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const id = req.query.id.toString();
      const fixture = await getFixture(id);
      return res.status(200).json({ fixture });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
