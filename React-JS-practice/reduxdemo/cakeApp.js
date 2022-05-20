//Redux
//run this by node cakeApp.js
const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

//----------------Initial State----------------
let initialState = {
    noOfCakes:20,
    noOfIceCream:50
}

//----------------Define Action----------------
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const MAKE_CAKE = "MAKE_CAKE";
const MAKE_ICECREAM = "MAKE_ICECREAM";

//----------------Action Creation----------------
function buyCake()
{
    //returning BUY_CAKE action object
    return {type:BUY_CAKE, payload: "Cake Application"}
}
function buyIcecream()
{
    return {type:BUY_ICECREAM, payload: "Icecream Application"}
}

//----------------Reducer----------------
function cakeReducer(state=initialState, action)
{
    switch(action.type)
    {
        case BUY_CAKE:
            return {...state, noOfCakes:state.noOfCakes-1};
        case MAKE_CAKE:
            return {...state, noOfCakes:state.noOfCakes+1};
        default:
            return state;
    }
}

function icecreamReducer(state=initialState, action)
{
    switch(action.type)
    {
        case BUY_ICECREAM:
            return {...state, noOfIceCream:state.noOfIceCream-1};
        case MAKE_ICECREAM:
            return {...state, noOfIceCream:state.noOfIceCream+1};
        default:
            return state;
    }
}

//----------------Combine Reducer----------------
const roorRed = combineReducers({cake:cakeReducer, ice:icecreamReducer})

//----------------Create Store----------------
//after adding logger to the middleware, able to see different state
const store = createStore(roorRed, applyMiddleware(logger)); 
//----------------
console.log("Initial State: " + store.getState()) //Initial State: [Object Object]
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());