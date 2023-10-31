/*
    Principio da segregação de interfaces:  

    Este principio diz que os clientes não devem ser forçados a depender de types, interfaces ou membros abstratos que não utilizam.
    
    Ou seja dada uma classe x que implementa uma interface y, os tipos e metodos de y não devem forçar x a implementá-los.

    Um exemplo para isto em cima da temática do código é ter uma classe de cliente que pode ser tanto uma empresa quanto uma pessoa fisica, ambos são do tipo 'costumer' por se adequarem as caracteristica de um costumer porém, seus atributos não são os mesmos. 

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
