import { createStore } from 'redux';

//Action generators - function that return action object

const incrementCount = ({incrementBy= 1} = {}) => {

    return {
        type: 'INCREMENT',
       // incrementBy: incrementBy  //since here name is same so we can directly write
       incrementBy
    };
};

const decrementCount = ( {decrementBy = 1} = {} ) => ({

    type:'DECREMENT',
    decrementBy

});

const setCount = ({count}) => ({
    type:'SET',
    count
});

const resetCount = () => ({
    type:'RESET'
});

// - -- - - -- -- -- -- - -- - -- - -REDUCERS- - - -- - - - -- - -- - - -- - --   - --  - - //

const countReducer = (state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count:action.count
            }
        case 'RESET':
            return {
                count : 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);


//We can watch for changes each time automatically by subscribing to the store;

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

//We save this into a variable because subscribe function return a value that can be used to unsubscribe

//we can write unsubscribe() to stop watching changes;


//console.log(store.getState());  //getState() method is used to get the current state

//Action - It is an object used to set action type based on which we change the 
//state in store

store.dispatch(incrementCount({incrementBy:5}));   //Here we are dispatching the action object into action parameter of store
store.dispatch(incrementCount());

store.dispatch(setCount({count:10}));

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(decrementCount());

//we can also write like this
// store.dispatch({
//         type: 'DECREMENT',
//         decrementBy: 10
// });

store.dispatch(resetCount());
