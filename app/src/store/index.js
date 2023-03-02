import { createStore } from 'redux';
import { clickerReducer } from './reducer/clickerReducer';





export const store = createStore(clickerReducer);