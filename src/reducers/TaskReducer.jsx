import {v4 as uuidv4} from "uuid";

const INITIAL_STATE = {
    tasks : [],
};

export default function TaskReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case "ADD_TASK" :
            return {
                ...state, tasks : [...state.tasks, {id : uuidv4(), text : action.payload}]

            };
        case "EDIT_TASK": 
            return {
                ...state, tasks : state.tasks.map((task) => 
                task.id === action.payload.id 
            ? {...task, text : action.payload.text}
            : task),
            };

        case "DELETE_TASK" :
            return {
                ...state, 
                tasks : state.tasks.filter((task) =>
                task.id !== action.payload
                ),
            };
        default :
        return state;
    }
}