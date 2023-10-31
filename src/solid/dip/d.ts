/*
    Principio da Inversão de dependência: 

    Propõe que modulos de alto nivel não devem depender de modulos de baixo nivel. Ambos devem depender de abstrações. 
      
    * classe de alto nivel: classes que gerenciam as classes de baixo nivel.  
    * classe de baixo nivel classes que executam tarefas.
     
    A ideia aqui é manter a aplicação desacoplada o maximo possivel, sendo assim depender propiamente de uma classe, não é uma boa opção mas uma sim de interface que as  classes possam  implementar, se torna a escolha mais acertiva.
    
    No resumo da opera, queremos que nosssa classe dependam de uma interface e não de uma classe.

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
