import { React, useState } from "react";
import { useSelector } from "react-redux";

function CartPage(props) {
  const cartList = useSelector((state) => state.cartList);
  const addPrice = () => {
    let price = 0;
    let resultPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
      price +=
        parseInt(cartList[i].price.replace(/,/g, "")) * cartList[i].count;
      resultPrice = String(price).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    }
    return resultPrice;
  };

  return (
    <div>
      <div className="nav">
        <h4>Cart</h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(function (a, i) {
            return (
              <tr key={a.id}>
                <th scope="row">{i + 1}</th>
                <td>{cartList[i].name}</td>
                <td>{cartList[i].count}</td>
                <td>{cartList[i].price}</td>
              </tr>
            );
          })}
          <tr>
            <th>#</th>
            <th></th>
            <th>Total Price</th>
            <th>{addPrice()}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
