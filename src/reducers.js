let id = 2;
function customers(state = [],action){
    if(action.type === "ADD_CUSTOMER"){
        action.value.id = ++id;
        return [...state,action.value];
    }
    else if(action.type === "UPDATE_CUSTOMER"){
        const index = state.findIndex((c)=>c.id === action.value.id);
        state[index] = action.value;
        return [...state];  
    }
    else if(action.type === "REMOVE_CUSTOMER"){
        const index = state.findIndex((c)=>c.id === action.value.id);
        const cust = state.filter((c)=>c.id != action.value.id);
        // cust.slice(1);
        console.log(cust);
        return [...cust];
    }
    return state;
}
function currentCustomer(state ={},action){
    if(action.type === "CHANGE_CURRENT_CUSTOMER"){
        return action.value;
    }
    return state;
}
function searchTerm(state =  "",action){
    if(action.type === "CHANGE_SEARCH_TERM"){
        return action.value;
    }
    return state;
}


reducers =  Redux.combineReducers({
    customers,currentCustomer,searchTerm
  })