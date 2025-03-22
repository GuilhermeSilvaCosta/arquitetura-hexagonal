import UserRegister from '@/core/user/service/UserRegister';
import TerminalUtil from '@/app/util/TerminalUtil';
import User from '@/core/user/model/User';
import PasswordEncrypt from '@/adapter/auth/PasswordEncrypt';
import UserRepositoryPg from '@/adapter/db/UserRepositoryPg';

export default async function userRegister() {
  try {
    TerminalUtil.title('Registrar Usuário');

    const name = await TerminalUtil.requireField('Nome: ', 'User teste');
    const email = await TerminalUtil.requireField('Email: ', 'user@teste.com');
    const password = await TerminalUtil.requireField('Senha: ', 'abcdef');

    const user: User = { name, email, password };
    const userRegister = new UserRegister(UserRepositoryPg, PasswordEncrypt);
    await userRegister.execute(user);

    TerminalUtil.success('Usuário registrado com sucesso');
  } catch (err) {
    console.error(err);
  } finally {
    await TerminalUtil.awaitPressEnter();
  }
}
