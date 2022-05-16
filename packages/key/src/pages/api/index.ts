import { NextApiRequest, NextApiResponse } from 'next';

type StatusData = {
  status: string;
};

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse<StatusData>
) {
  response.status(200).json({ status: 'OK' });
}
