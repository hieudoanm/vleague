import { NextApiRequest, NextApiResponse } from 'next';
import { getVideos } from '../../../services/youtube/youtube.service';

/**
 * @swagger
 * /api/videos:
 *  get:
 *    tags: [Videos]
 *    description: Get Videos
 *    responses:
 *      200:
 *        description: List of Videos
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
      const queryMaxResults = req.query.maxResults?.toString() || '5';
      const maxResults = parseInt(queryMaxResults, 10);
      const videos = await getVideos({ maxResults });
      return res.status(200).json({ total: videos.length, data: videos });
    }
    return res.status(405);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default handler;
