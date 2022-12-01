import * as actions from '../action/todolist';

const initState = {
    todoList: ['firstThing','secondThing'],
    data: {},
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
        
        case actions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
            };

        default:
            return state;
    }
};

export default todoReducer;