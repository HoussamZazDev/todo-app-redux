import {createStore} from 'redux';
import TaskReducer from './reducers/TaskReducer';

const store = createStore(TaskReducer);

export default store;