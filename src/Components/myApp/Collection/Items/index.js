import React, { Component } from "react";
import Aux from "../../../../hoc/Auxx";
import "./index.css";
import $ from "jquery";
import ItemsState from "./state";

class Items extends Component {
  state = ItemsState;

  addItem = e => {
    // Pick the target key
    var pickedElement = e.target.parentElement.children[1].innerHTML;
    // copy state
    var copyState = { ...this.state };
    // returning array without the picked item
    var updateCopy = copyState.items.filter(el => {
      return el.title !== pickedElement;
    });
    // returning array with only the picked item
    var updateCopyCart = copyState.items.filter(el => {
      return el.title === pickedElement;
    });

    // push the cart item to the copy state
    copyState.cart.push(updateCopyCart[0]);

    // push the item price to the sum array
    copyState.sum.push(updateCopyCart[0].price);

    //calculate the sum array from the copy state
    var sum = copyState.sum.reduce((a, b) => a + b, 0);

    // update the copy state with the total price
    copyState.cartTotal = sum;

    this.setState({
      items: updateCopy,
      cart: copyState.cart,
      cartTotal: copyState.cartTotal
    });
  };

  deleteItemFromCart = e => {
    // save the picked element in a variable
    var pickedElement = e.target.parentElement.children[0].alt;
    // copy state for editing porpuse
    var copyState = { ...this.state };

    // save the new cart items in a variable
    var updatedItems = copyState.cart.filter(el => {
      return el.title !== pickedElement;
    });
    // save the picked item to return it to the shop gallery
    var pickedItem = copyState.cart.filter(el => {
      return el.title === pickedElement;
    });

    // pick the price of the picked item
    var itemPrice = pickedItem[0].price;
    // remove the price from the sum array
    var sumArr = copyState.sum.filter(el => {
      return el !== itemPrice;
    });
    // calculate the new total price
    var sum = sumArr.reduce((a, b) => a + b, 0);

    // update the copyState before setting state
    copyState.cartTotal = sum;
    copyState.sum = sumArr;
    copyState.cart = updatedItems;
    copyState.items.push(pickedItem[0]);

    // Set the udpated state
    this.setState({
      cart: copyState.cart,
      sum: copyState.sum,
      cartTotal: copyState.cartTotal,
      items: copyState.items
    });
  };

  addClassHover = function(e) {
    $(e.target).addClass("jello");
  };
  removeClassHover = function(e) {
    $(e.target).removeClass("jello");
  };

  shouldComponentUpdate() {
    // console.log("Items -> SCP");
    return true;
  }
  render() {
    // console.log("Items -> RENDER!!!");
    var rendering = this.state.items.map(el => {
      return (
        <div className="wrap-item" key={el.title}>
          <img src={el.img} alt={el.title} />
          <p className="title-item">{el.title}</p>
          <p className="price-item">Price</p>
          <p className="actual-price-item">{el.price}$</p>
          <p
            onMouseLeave={this.removeClassHover}
            onMouseEnter={this.addClassHover}
            onClick={this.addItem}
            className="add-cart-item animated"
          >
            Add to CART
          </p>
        </div>
      );
    });
    return (
      <Aux>
        {rendering}
        <div className="break-row"></div>
        <div className="my-cart-div">
          <p className="cart-title">Cart</p>
          <p className="cart-price">
            Total Price: <span>{this.state.cartTotal}$</span>
          </p>
          <div className="cart-picking-item">
            {this.state.cart.map(el => {
              return (
                <div key={el.title2} className="cart-picking-inside">
                  <img src={el.img} alt={el.title} />
                  <p
                    onClick={this.deleteItemFromCart}
                    className="some-bul-text"
                  >
                    -
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Aux>
    );
  }
}

export default Items;
