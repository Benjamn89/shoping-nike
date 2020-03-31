import BlackHat from "../../../../media/black-hat.png";
import Shirt from "../../../../media/short.png";
import Shoes from "../../../../media/shoes.png";
import Pants from "../../../../media/pants.png";

const ItemsState = {
  items: [
    {
      img: BlackHat,
      price: 70,
      title: "Nike Hat",
      title2: "hat-cart"
    },
    {
      img: Shirt,
      price: 85,
      title: "Nike T-shirt",
      title2: "shirt-cart"
    },
    {
      img: Pants,
      price: 50,
      title: "Sport-Pants",
      title2: "pant-cart"
    },
    {
      img: Shoes,
      price: 150,
      title: "Nike-Balance Shoes",
      title2: "shoe-cart"
    }
  ],
  cart: [],
  cartTotal: 0,
  sum: []
};

export default ItemsState;
