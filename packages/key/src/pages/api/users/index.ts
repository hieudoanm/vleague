import { NextApiRequest, NextApiResponse } from 'next';
import 'reflect-metadata';
import { UserEntity } from '../../../models/users/users.entity';
import { createUser, getUser } from '../../../services/users/users.service';

enum Method {
  GET = 'GET',
  POST = 'POST',
}

type UserData = {
  user: UserEntity;
};

type ErrorData = {
  message: string;
};

const handler = async (
  request: NextApiRequest,
  response: NextApiResponse<UserData | ErrorData>
) => {
  try {
    if (request.method === Method.GET) {
      const email: string = (request.query.email || '').toString();
      const userResponse = await getUser(email);
      return response.status(200).json(userResponse);
    }

    if (request.method === Method.POST) {
      const email: string = request.body.email || '';
      const userResponse = await createUser(email);
      return response.status(200).json(userResponse);
    }

    response.status(405);
  } catch (error) {
    console.error('error', error);

    response.status(500).json({ message: error?.message });
  }
};

export default handler;
