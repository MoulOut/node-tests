import Cart from './cart.js';
import Item from './item.js';

const cart = new Cart();

cart.adiciona(new Item('Maçã', 1, 3));
cart.adiciona(new Item('Banana', 1.4, 5));
cart.adiciona(new Item('Melancia', 2, 1));
cart.adiciona(new Item('Uva', 4.3, 2));
cart.adiciona(new Item('Açaí', 3, 5));

cart.adicionaFrete(15);

cart.calculaSubtotal();

cart.finalizaCompra();

console.log(cart);
