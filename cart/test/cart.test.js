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
    cart.add(item);
    cart.add(item2);

    expect(typeof cart).toBe('object');
    expect(cart.items).toContain(item);
    expect(cart.items).toContain(item2);
  });

  it('should have property total at initialization', () => {
    const cart = new Cart();

    expect(cart).toHaveProperty('total');
  });

  it('Should throw an error if an attempt to buy with an empty cart occurs.', () => {
    function captureCartError() {
      const cart = new Cart();

      cart.finalizeOrder();
    }

    expect(captureCartError).toThrowError('Empty Cart.');
  });

  it('Should add frete', () => {
    const cart = new Cart();
    cart.addFrete(10);

    expect(cart.frete).toBe(10);
  });

  it('Should finalize orders sucessfully', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Honey', 1, 5);

    const cart = new Cart();
    cart.add(item);
    cart.add(item2);
    cart.addFrete(10);

    expect(cart.finalizeOrder()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });

  it('Should calculate total', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Honey', 1, 5);

    const cart = new Cart();
    cart.add(item);
    cart.add(item2);
    cart.addFrete(10);

    expect(cart.calculateTotal()).toBe(25);
  });
});
