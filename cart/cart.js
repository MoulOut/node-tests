class Cart {
  constructor() {
    this.items = [];
    this.subtotal = null;
    this.frete = null;
    this.total = null;
  }

  adiciona(item) {
    this.items.push(item);
  }

  adicionaFrete(value) {
    this.frete = value;
  }

  calculaSubtotal() {
    this.subtotal = this.items.reduce(
      (acum, item) => acum + item.getTotalItemValue(),
      0
    );
    return this.subtotal + this.frete;
  }

  finalizaCompra() {
    if (this.items.length === 0) {
      throw new Error('Empty Cart.');
    }

    this.total = this.calculaTotal();

    return {
      subtotal: this.subtotal,
      frete: this.frete,
      total: this.total,
    };
  }
}

export default Cart;
