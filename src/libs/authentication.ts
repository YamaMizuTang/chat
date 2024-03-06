import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export function expressAuthentication(
  request: express.Request,
  securityName: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  scopes?: string[],
) {
  if (securityName === 'jwt') {
    const headerParse = request.headers.authorization?.split(' ');
    if (
      !headerParse ||
      (headerParse.length === 2 && headerParse[0] !== 'Bearer')
    ) {
      return Promise.reject({});
    }
    const token = headerParse[1];
    try {
      const decoded = jwt.verify(token, 'wiherqo');
      return Promise.resolve(decoded);
    } catch (e) {
      return Promise.reject({}); //tsoa 拋到 error handler
    }
  }
  return Promise.reject({});
}
