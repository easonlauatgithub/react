const initState = {
    todoList: ['firstThing','secondThing'],
}

const todoReducer = (state = initState, action)=>{
    switch(action.type){
        default:
            return state;
    }
};

export default todoReducer;