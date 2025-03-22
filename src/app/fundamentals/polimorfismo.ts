import Ferrari from '@/core/fundamentals/Ferrari';
import TerminalUtil from '../util/TerminalUtil';
import Fusca from '@/core/fundamentals/Fusca';
import Car from '@/core/fundamentals/Car';

export default async function polimorfismo() {
  TerminalUtil.title('Polimorfismo');

  const [carType] = await TerminalUtil.select('Tipo de Carro?', [
    'Ferrari',
    'Fusca',
  ]);
  const car = carType === 0 ? new Ferrari() : new Fusca();

  while (true) {
    TerminalUtil.clear();
    TerminalUtil.print('Velocidade Maxima ', `${car.maxSpeed} km/h`);
    TerminalUtil.print('Velocidade Atual ', `${car.currentSpeed} km/h`);

    const [option] = await TerminalUtil.select('O que fazer?', [
      'Acelerar',
      'Frear',
    ]);
    option === 0 ? car.accelerate() : car.brake();

    const repeat = await TerminalUtil.confirmation('Deseja continuar?');
    if (!repeat) return;
  }
}
