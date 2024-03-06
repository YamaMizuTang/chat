import prisma from '../libs/db';

class UserModel {
  getUserTokenData(email: string, password: string) {
    return prisma.user.findFirst({
      select: {
        id: true,
        email: true,
        birthday: true,
      },
      where: { email, password },
    });
  }
  getUserByEmail(email: string) {
    return prisma.user.findFirst({
      where: { email }, //={email:email}
    });
  }
}

export default new UserModel();
