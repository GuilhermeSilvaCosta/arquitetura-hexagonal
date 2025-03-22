import TerminalUtil from '@/app/util/TerminalUtil';
import polimorfismo from '../fundamentals/polimorfismo';
import dip from '../fundamentals/dip';

export default async function menuFundamentals() {
  TerminalUtil.title('Fundamentos');

  const [index] = await TerminalUtil.menu([
    '1. Polimorfismo',
    '2. DIP',
    '3. Voltar',
  ]);

  switch (index) {
    case 0:
      await polimorfismo();
      break;
    case 1:
      await dip();
      break;
    case 3:
      return;
  }

  await menuFundamentals();
}
