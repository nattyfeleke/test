import { combineReducers } from 'redux';
import alert from './alert';
import employee from './employee';

export default combineReducers({
  alert,
  employee,
});

// export type RootState = ReturnType<typeof combineReducers>;
