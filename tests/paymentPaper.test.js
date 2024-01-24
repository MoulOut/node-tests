import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Payment Papers tests', () => {
  it('Should return the sum of extra hours.', () => {
    const expected = 2500;
    const returned = somaHorasExtras(2000, 500);

    expect(returned).toBe(expected);
  });

  it('Should return the discounted value.', () => {
    const expected = 2500;
    const returned = calculaDescontos(3000, 500);

    expect(returned).toBe(expected);
  });
});
