// import redux from "redux";
const redux = require("redux");

const createStore = redux.createStore;

// step 1
const BUY_CAKE = "BUYS_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_PASTRY = "BUY_PASTRY";
const BUY_BOOK = "BUY_BOOK";
const BUY_PEN = "BUY_PEN";

// step 2
function buy_cake() {
  return {
    type: BUY_CAKE,
    info: "This is dark cake",
  };
}

function buy_icecream() {
  return {
    type: BUY_ICECREAM,
    info: "This is vanilla icecream",
  };
}

function buy_pastry() {
  return {
    type: BUY_PASTRY,
    info: "This is chocolate pastry",
  };
}

function buy_book() {
  return {
    type: BUY_BOOK,
    info: "This is HTML book",
  };
}

function buy_pen() {
  return {
    type: BUY_PEN,
    info: "This is Blue pen",
  };
}

// step 3
const initState = {
  noOfCake: 10,
  noOfIcecream: 20,
  noOfPastry: 15,
  noOfBook: 5,
  noOfPen: 50,
};

// step 4
const reducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecream: state.noOfIcecream - 1,
      };
    case BUY_PASTRY:
      return {
        ...state,
        noOfPastry: state.noOfPastry - 1,
      };
    case BUY_BOOK:
      return {
        ...state,
        noOfBook: state.noOfBook - 1,
      };
    case BUY_PEN:
      return {
        ...state,
        noOfPen: state.noOfPen - 1,
      };
    default:
      return state;
  }
};

// step 5
const store = createStore(reducer);
console.log("Stock of Shop", store.getState());
store.subscribe(() => console.log("Updated Inventory", store.getState()));
store.dispatch(buy_cake());
store.dispatch(buy_cake());
store.dispatch(buy_icecream());
store.dispatch(buy_pastry());
store.dispatch(buy_pastry());
store.dispatch(buy_book());
store.dispatch(buy_pen());
store.dispatch(buy_pen());
