/*
    principio da responsabilidade única: 
    Diz que uma classe tem um e apenas um motivo para mudar ou seja, uma e apenas uma responsabilidade bem definida no sistema  sem acumular funcionalidades não relacionadas. 

*/
console.log("🔥");

import { TenPercentDiscount, NoDiscount } from "./entities/Discount";
import { Order } from "./entities/Order";
import { Product } from "./entities/Products";
import { ShoppingCart } from "./entities/ShoppingCart";
import { MessageService } from "./services/MessageService";
import { PersistencyService } from "./services/PersistencyService";

// const noDiscount = new NoDiscount();
const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
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
