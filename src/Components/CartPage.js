import React from "react";
import { useSelector } from "react-redux";

function CartPage(props) {
  let a = useSelector((state) => state.cartList);

  return (
    <div>
      <div className="nav">
        <h4>Cart</h4>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {a.map(function (num, i) {
            return (
              <tr>
                <th scope="row">{i + 1}</th>
                <td>{a[i].name}</td>
                <td>{a[i].price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CartPage;
