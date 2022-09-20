// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};
/**
 * Adds two numbers together.
 * @param {NextApiRequest} req The first number.
 * @param {NextApiResponse} res The second number.
 * @return {void} The sum of the two numbers.
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
): void {
  res.status(200).json({ name: 'John Doe' });
}
