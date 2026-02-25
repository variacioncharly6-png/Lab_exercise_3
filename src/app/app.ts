import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-root',
standalone: true,
imports: [CommonModule],
templateUrl: './app.html',
styleUrl: './app.css'
})

export class App {

email = "variacioncharly6@gmail.com";
phone = "09462545988";

cartCount = 0;
totalPrice = 0;

products = [

{
name: 'Motor Oil',
description: 'High quality engine oil',
price: 450,
stock: 5
},

{
name: 'Brake Pads',
description: 'Durable and safe brakes',
price: 650,
stock: 5
},

{
name: 'Spark Plug',
description: 'Improves engine performance',
price: 180,
stock: 5
},

{
name: 'Motor Chain',
description: 'Heavy duty chain',
price: 1200,
stock: 5
}

];


addToCart(product:any){

if(product.stock > 0){

product.stock--;

this.cartCount++;

this.totalPrice += product.price;

}

}

}