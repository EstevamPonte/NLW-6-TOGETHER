import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization

  if(!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ")

  
  try {
    const { sub } = verify(token, '51dfd5bda8356ced09e100a297586a3d') as IPayload

    req.user_id = sub

    return next()
  } catch (error) {
    return res.status(401).end();
  }

}

export {ensureAuthenticated}