/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../proto/grpc/auth';

import grpc from '@grpc/grpc-js';
type Data = {
  access_token: string;
  refresh_token: string;
  error: string;
};

/**
 * Handles the login request.
 * @param {NextApiRequest} req request object.
 * @param {NextApiResponse} res response object.
 * @return {void}
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  if (!req.body) {
    res.statusCode = 400;
    res.end();
    return;
  }
  const { username, password } = req.body;
  const response = callLoginRPC(username, password);
  if (response) {
    res.statusCode = 200;
    res.json({
      access_token: response.access_token,
      refresh_token: response.refresh_token,
      error: '',
    });
    res.end();
  }

  res.status(400).json({
    access_token: '',
    refresh_token: '',
    error: 'Invalid username or password',
  });
}

function callLoginRPC(
  username: string,
  password: string,
): auth.LoginResponse | null {
  const client = new auth.AuthServiceClient(
    'localhost:8080',
    grpc.credentials.createInsecure(),
  );
  const request = new auth.LoginRequest();
  request.username = username;
  request.password = password;
  // eslint-disable-next-line new-cap
  client.Login(request, (err, res) => {
    console.log('called');
    if (err) {
      console.log(err);
      return;
    }
    return res;
  });
  return null;
}
