/*
    Principio da substituição de Liskov: 

    Prop~e que subtipos precisam ser substituiveis por seus tipos base, em outras palavras se um programa precisa de uma classe Animal, a classe Cachorro uma vez que é extende da classe animal, deve possuir caracteristicas necessárias para  atender as necessidades deste programa. 

    Uma vez que o ts tem o typesafe o conceito fica inviavel implementar nesse exemplo, uma vez que o single responsibility ja foi aplicado, porém da pra se observar a confirmação deste principio na classe 'Discount', onde independende de qual vai ser ussada, todas servem da mesma forma na implementação do ecemplo. 

*/
console.log("🔥");

import {
  TenPercentDiscount,
  NoDiscount,
  TwentyPercentDiscount,
} from "./entities/Discount";
import { Order } from "./entities/Order";
import { Product } from "./entities/Products";
import { ShoppingCart } from "./entities/ShoppingCart";
import { MessageService } from "./services/MessageService";
import { PersistencyService } from "./services/PersistencyService";

// const noDiscount = new NoDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const twentyPercentDiscount = new TwentyPercentDiscount();
const shoppingCart = new ShoppingCart(twentyPercentDiscount);
const messaging = new MessageService();
const persistency = new PersistencyService();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product("Camisa", 39.91));
shoppingCart.addItem(new Product("Bermuda", 69.99));
shoppingCart.addItem(new Product("Tênis", 249.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWhithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
