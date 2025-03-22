import UseCase from '@/core/shared/UseCase';
import User from '../model/User';
import TerminalUtil from '@/app/util/TerminalUtil';
import UserRepositoryInMemory from './UserRepositoryInMemory';
import Errors from '@/core/shared/Errors';
import Id from '@/core/shared/Id';

class UserRegister implements UseCase<User, void> {
  async execute(user: User): Promise<void> {
    const passwordEncrypt = user.password.split('').reverse().join('');

    const found = await UserRepositoryInMemory.findByEmail(user.email);
    if (found) throw new Error(Errors.USER_ALREADY_EXISTS);

    const newUser: User = {
      ...user,
      password: passwordEncrypt,
      id: Id.buildHash(),
    };

    await UserRepositoryInMemory.insert(newUser);

    TerminalUtil.success('Usuário registrado com sucesso');
  }
}

export default new UserRegister();
