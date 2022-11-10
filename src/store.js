import { configureStore, createSlice } from "@reduxjs/toolkit";

let coatItems = createSlice({
  name: "coatItems",
  initialState: [
    { id: 0, name: "A coat", img: "coat1.jpg", price: "100,000", count: 1 },
    { id: 1, name: "B coat", img: "coat2.jpg", price: "200,000", count: 1 },
    { id: 2, name: "C coat", img: "coat3.jpg", price: "300,000", count: 1 },
    { id: 3, name: "D coat", img: "coat4.jpg", price: "400,000", count: 1 },
  ],
});

let reviewList = createSlice({
  name: "reviewList",
  initialState: [
    "We recommend going to the nearest CHANEL Boutique of your choice where an advisor can help introduce our after sales services. You can contact a Customer Care Advisor either online or by telephone at 1.800.550.0005, 24/7, so that we may assist you.",
    "Please note that merchandise that has been altered, sale items, and markdown items are not returnable. Refunds will be issued in the original form of payment. Please note that cash, debit card, and travelers check purchases will be refunded via check in the mail.",
    "You have 14 days from the date of purchase to return it in the United States. If you do not return the product within the original country of purchase, contact us for more details on our international return policy.",
  ],
  reducers: {
    addReview(state, action) {
      state.push(action.payload);
    },
    removeReview(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

let cartList = createSlice({
  name: "cartList",
  initialState: [
    { id: 0, name: "A coat", img: "coat1.jpg", price: "100,000", count: 1 },
    { id: 3, name: "D coat", img: "coat4.jpg", price: "400,000", count: 1 },
    { id: 2, name: "C coat", img: "coat3.jpg", price: "300,000", count: 1 },
    { id: 1, name: "B coat", img: "coat2.jpg", price: "200,000", count: 1 },
  ],
  reducers: {
    addCart(state, action) {
      state.push(action.payload);
    },
    increaseCount(state, action) {
      let b = state.find((a) => a.id === action.payload.id);
      b.count++;
      // state[action.payload].count++;
      // action.payload가 객체로 오고,action.payload.count++ 안됨
    },
  },
});

export let { addReview, removeReview } = reviewList.actions;
export let { addCart, increaseCount } = cartList.actions;

export default configureStore({
  reducer: {
    coatItems: coatItems.reducer,
    reviewList: reviewList.reducer,
    cartList: cartList.reducer,
  },
});
