import userModel from '../models/user';
import * as jwt from 'jsonwebtoken';

class UserService {
  getUserByEmail(email: string) {
    return userModel.getUserByEmail(email);
  }
  async getUserToken(email: string, password: string) {
    const tokenData = await userModel.getUserTokenData(email, password);
    if (!tokenData) throw new Error('User Not found');
    const token = jwt.sign(tokenData, 'wiherqo', { expiresIn: '0.5h' });
    return token;
  }
}

export default new UserService();
