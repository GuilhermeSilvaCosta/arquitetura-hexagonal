import UserRegister from '@/core/user/service/UserRegister';
import TerminalUtil from '../util/TerminalUtil';
import User from '@/core/user/model/User';

export default async function userRegister() {
  TerminalUtil.title('Registrar Usuário');

  const name = await TerminalUtil.requireField('Nome: ', 'User teste');
  const email = await TerminalUtil.requireField('Email: ', 'user@teste.com');
  const password = await TerminalUtil.requireField('Senha: ', 'abcdef');

  const user: User = { name, email, password };

  await UserRegister.execute(user);

  await TerminalUtil.awaitPressEnter();
}
