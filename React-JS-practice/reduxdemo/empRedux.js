//Redux
//json-server --watch emp.json 
//run this by node cakeApp.js
const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const axios = require("axios")
const thunkMiddleware = require('redux-thunk').default

//----------------Initial State----------------
let initialState = {
    loading: false,
    emps:[],  //initial is blank
    empErr:""
}

//----------------Action----------------
const FETCH_EMPS_REQUEST = 'FETCH_EMPS_REQUEST'
const FETCH_EMPS_SUCCESS = 'FETCH_EMPS_SUCCESS'
const FETCH_EMPS_FAILURE = 'FETCH_EMPS_FAILURE'

//----------------Action Creator----------------
//function returns action object
const fetchEmpsRequest = () =>{
    return {
        type: FETCH_EMPS_REQUEST,  //return action object
        payload: "Fetch"
    }
}

const fetchEmpsSuccess = emps =>{   //will return emp array
    return {
        type: FETCH_EMPS_SUCCESS,  //return action object
        payload: emps
    }
}

const fetchEmpsFailure = error =>{   //will return emp array
    return {
        type: FETCH_EMPS_FAILURE,  //return action object
        payload: error
    }
}
//--------------------------------
const fetchEmps = () =>{
    return function (dispatch) {
        dispatch(fetchEmpsRequest())
        axios 
            .get('http://localhost:3000/emps')
            .then(empRes => {
                //response.data is the users
                dispatch(fetchEmpsSuccess(empRes.data))
            })
            .catch(error => {
                //error.message is the error message
                dispatch(fetchEmpsFailure(error.message))
            })
    }
}

//----------------Reducer----------------
const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case FETCH_EMPS_REQUEST:
            return {
                ...state,
                loading: true  //update 
            }
        case FETCH_EMPS_SUCCESS:
            return {
                loading:false,
                emps: action.payload,
                error: ''
            }
        case FETCH_EMPS_FAILURE:
            return{
                loading: false,
                emps:[],
                error: action.payload
            }
    }
}

//----------------Create Store----------------
const store = createStore(reducer, applyMiddleware(logger, thunkMiddleware))
console.log(store.getState());
store.dispatch(fetchEmps())  //with thunk, you can dispatch non-JS script 