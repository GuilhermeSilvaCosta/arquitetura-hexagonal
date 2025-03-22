import race from '@/core/fundamentals/race';
import TerminalUtil from '../util/TerminalUtil';
import Fusca from '@/core/fundamentals/Fusca';
import Ferrari from '@/core/fundamentals/Ferrari';
import Civic from '@/core/fundamentals/Civic';
import { terminal } from 'terminal-kit';

export default async function dip() {
  TerminalUtil.title('DIP');
  const [index] = await TerminalUtil.select('Tipo de carro?', [
    'Fusca',
    'Civic',
    'Ferrari',
  ]);
  const car =
    index == 0 ? new Fusca() : index == 1 ? new Civic() : new Ferrari();
  race(car);
  await TerminalUtil.awaitPressEnter();
}
