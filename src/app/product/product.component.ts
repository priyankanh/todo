import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  //quantity: number = 1
  //carts: any[] = [];
  // totalCartItem: number = 0;

  products = [
    {
      Name: 'Rice',
      Price: '1500',
      Photo: "./../../assets/rice.jpg",
      description: "Rice is cooked by boiling, or it can be ground into a flour",
      quantity: 1
    },
    {
      Name: 'Noodles',
      Price: '20',
      Photo: './../../assets/noodles.jpg',
      description: "Non-sticky strands of noodles have a classic Indian taste and flavours",
      quantity: 1
    },
    {
      Name: 'Soap',
      Price: '40',
      Photo: './../../assets/soap.jpg',
      description: " Keeps your skin healthy and glowing as it leaves the skin soft, supple and acne-free",
      quantity: 1
    },
    {
      Name: "Juice",
      Photo: "./../../assets/Juice.png",
      Price: "50",
      description: " Juice is a drink made from the extraction or pressing of the natural liquid contained ",
      quantity: 1
    },
    {
      Name: "Biscuit",
      Photo: "./../../assets/biscuit.jpg",
      Price: "25",
      description: "A biscuit is any of various hard or crisp dry baked product ",
      quantity: 1
    },
    {
      Name: "Chocalate",
      Photo: "./../../assets/chocolate.jpg",
      Price: "25",
      description: "Dark chocolate has less sugar, and a more bitter taste. ",
      quantity: 1
    },
    {
      Name: "Oil",
      Photo: "./../../assets/Oil.png",
      Price: "225",
      description: " Cooking oil that contain saturated fat, such as coconut oil, palm oil and palm kernel oil are solid. ",
      quantity: 1

    },
    {
      Name: "Soup",
      Photo: "./../../assets/Soup.png",
      Price: "60",
      description: "Soup, liquid food prepared by cooking meat, poultry, fish, legumes, or vegetables with seasonings",
      quantity: 1
    }
  ];

  carts: any[] = [];
  totalCartItem: number = 0;

  addtocart(products: any) {
      /*   const */ let productExistInCart = this.carts.find(
    ({ Name }) => Name === products.Name
  );
    // for (let quantity in this.carts){
    if (!productExistInCart) {
      this.carts.push({ ...products, quantity: 1 });
      // for(let i=0; i< products.quantity; i++)
      this.carts.forEach(products => {
        this.totalCartItem += 1;
      });
      // this.totalCartItem += 1;
      // return;
    } else {
      productExistInCart.quantity += products.quantity;
    }
    //this.carts.push(products);
    //console.log(products.Name);        
  }
  //}
 /*  addtocart(products: any) {
    let productExistInCart = false
    for (let i in this.carts) {
      if (this.carts.find(
        ({ Name }) => Name === products.Name){
        this.carts[i].quantity++
        productExistInCart = true
        break;
      }
    }
  } */

  removecart(products: any) {
    this.carts.splice(products, 1);
    this.totalCartItem -= 1;
  }

  inc(products: any) {
    //console.log(products.quantity); 
    products.quantity += 1;

  }
  dec(products: any) {
    if (products.quantity != 1) {
      //console.log(products.quantity); 
      products.quantity -= 1;

    }
  }
}
