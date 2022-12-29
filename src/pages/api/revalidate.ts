import { NextApiRequest, NextApiResponse } from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = req.query.secret as string
  const envSecret = process.env.NEXT_PUBLIC_SECRET

  if (secret !== envSecret) {
    return res.status(401).send({
      message: 'Invalid secret token'
    })
  }
}
