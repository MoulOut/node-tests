import Item from '../item.js';

describe('Item Tests', () => {
  it('Should have 3 fields: name,value,quantity', () => {
    const item = new Item('Potato', 2.5, 10);

    expect(item.name).toBe('Potato');
    expect(item.value).toBe(2.5);
    expect(item.quantity).toBe(10);
  });

  it('Should have the price calculated over quantity', () => {
    const item = new Item('Potato', 0.5, 3);

    expect(item.getTotalItemValue()).toBe(1.5);
  });
});
