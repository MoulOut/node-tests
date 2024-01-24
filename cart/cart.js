class Cart {
  constructor() {
    this.items = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  add(item) {
    this.items.push(item);
  }

  addFrete(value) {
    this.frete = value;
  }

  calculateTotal() {
    this.subtotal = this.items.reduce(
      (acum, item) => acum + item.getTotalItemValue(),
      0
    );
    return this.subtotal + this.frete;
  }

  finalizeOrder() {
    if (this.items.length === 0) {
      throw new Error('Empty Cart.');
    }

    this.total = this.calculateTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export default Cart;
