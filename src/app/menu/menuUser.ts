import TerminalUtil from '@/app/util/TerminalUtil';
import userRegister from '../user/userResgister';

export default async function menuUser() {
  TerminalUtil.title('Usuário');

  const [index] = await TerminalUtil.menu([
    '1. Registrar Usuário',
    '2. Voltar',
  ]);

  switch (index) {
    case 0:
      await userRegister();
      break;

    case 1:
    default:
      return;
  }

  await menuUser();
}
