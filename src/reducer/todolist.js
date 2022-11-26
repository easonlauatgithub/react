import * as actions from '../action/todolist';

const initState = {
    todoList: ['firstThing','secondThing'],
}

const todoReducer = (state = initState, action)=>{
    switch(action.type){
        case actions.ADD_TODO:
            //todoList address have no change
            //state.todoList.push(action.payload.todo);
            //return state;
            //todoList have new address, trigger component to render
            return {
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload.todo,
                ],
            };

        default:
            return state;
    }
};

export default todoReducer;