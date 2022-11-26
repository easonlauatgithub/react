const initState = {
    todoList: ['firstThing','secondThing'],
}

const todoReducer2 = (state = initState, action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default todoReducer2;