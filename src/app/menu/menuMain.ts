import TerminalUtil from '@/app/util/TerminalUtil';
import menuFundamentals from './menuFundamentals';
import menuUser from './menuUser';

export default async function menuMain() {
  TerminalUtil.title('Menu Principal');

  const [index] = await TerminalUtil.menu([
    '1. Fundamentos',
    '2. Usuário',
    'Sair',
  ]);

  switch (index) {
    case 0:
      await menuFundamentals();
      break;
    case 1:
      await menuUser();
      break;
    case 1:
      process.exit(0);
  }

  menuMain();
}
