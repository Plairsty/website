import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../proto/grpc/auth';

import { credentials } from '@grpc/grpc-js';
type Data = {
  access_token: string;
  refresh_token: string;
};

/**
 * Handles the login request.
 * @param {NextApiRequest} req request object.
 * @param {NextApiResponse} res response object.
 * @return {void}
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): Promise<void> {
  if (!req.body) {
    res.statusCode = 400;
    res.end();
    return;
  }
  const { username, password } = req.body;
  const client = new auth.AuthServiceClient(
    'localhost:8080',
    credentials.createInsecure(),
  );

  // eslint-disable-next-line new-cap
  client.Login(
    new auth.LoginRequest({
      username: username,
      password: password,
    }),
    (err, response) => {
      if (err) {
        res.status(400);
      } else {
        console.log('Response: ' + res);
        res.status(200).json({
          access_token: response?.access_token ? response?.access_token : '',
          refresh_token: response?.refresh_token ? response?.refresh_token : '',
        });
      }
    },
  );
  client.close();
}
