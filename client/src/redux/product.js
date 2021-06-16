import produce from "immer";
import shampoo from "./img/shampoo.jpg";
import createReducer from "./utilsReducer";
const initialState = {
    products: [
        { amount: 1, id: 1, name: "shampoo", price: 10, img: shampoo },
        { amount: 1, id: 2, name: "milk", price: 3, img: shampoo },
        { amount: 1, id: 3, name: "bread", price: 5, img: shampoo },
        { amount: 1, id: 4, name: "yogurt", price: 6, img: shampoo },
        { amount: 1, id: 5, name: "milk", price: 4, img: shampoo },
        { amount: 1, id: 6, name: "banana", price: 1.2, img: shampoo },
        { amount: 1, id: 7, name: "toamato", price: 1, img: shampoo },
        { amount: 1, id: 8, name: "cucomber", price: 2, img: shampoo },
        { amount: 1, id: 9, name: "mango", price: 7, img: shampoo },
        { amount: 1, id: 10, name: "conditioner", price: 10, img: shampoo },
    ],
    basket: [],
};
const grocery = {
    addProduct(state, action) {
        console.log("addProduct");
        if (!state.basket.find((p) => p.id == action.payload.id))
            state.basket.push(action.payload);
    },
    increaseAmount(state, action) {
        console.log("increaseAmount");

        state.basket.find((p) => p.id == action.payload).amount++;
    },
    decreaseAmount(state, action) {
        console.log("decreaseAmount");
        const index = state.basket.findIndex((p) => p.id == action.payload);
        if (state.basket[index].amount > 0) state.basket[index].amount--;
    },
    removeFromBasket(state, action) {
        state.basket= state.basket.filter((element) => element.id !== action.payload);
    },
};
export default produce(
    (state, action) => createReducer(state, action, grocery),
    initialState
);
