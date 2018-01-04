import { combineReducers } from 'redux';
import { fake } from './fake-reducer';
import { houses } from './houseData-reducer'

const rootReducer = combineReducers({
  fake,
  houses
});


export default rootReducer;
