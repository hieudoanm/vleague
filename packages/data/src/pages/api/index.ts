import { NextApiRequest, NextApiResponse } from 'next';

type Data = { status: string };

/**
 * @swagger
 * /api:
 *  get:
 *    tags: [Status]
 *    description: Get Status
 *    responses:
 *      200:
 *        description: Status of the API
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: string
 */
const handler = (_req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ status: 'OK' });
};

export default handler;
