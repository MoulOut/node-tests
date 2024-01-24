import Cart from '../cart.js';
import Item from '../item.js';

describe('Cart Tests', () => {
  it('Should start empty', () => {
    const cart = new Cart();

    expect(cart.subtotal).toBeNull();
  });

  it('Should have items', () => {
    const item = new Item('Banana', 2, 15);
    const item2 = new Item('Apple', 3, 15);

    const cart = new Cart();
    cart.adiciona(item);
    cart.adiciona(item2);

    expect(typeof cart).toBe('object');
    expect(cart.items).toContain(item);
    expect(cart.items).toContain(item2);
  });

  it('should have property total at initialization', () => {
    const cart = new Cart();

    expect(cart).toHaveProperty('total');
  });
});
