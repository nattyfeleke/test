import { Reducer } from 'redux';
import { setAlertSuccess, removeAlertSuccess } from '../types/actionTypes';

import { Alert, Alerts } from '../types/storeTypes';
import {
  setAlertActionCreator,
  removeAlertActionCreator,
} from '../types/actionCreatorTypes';

const initialState: Alerts = [];

const alert = (
  state: Alerts = initialState,
  action: setAlertSuccess | removeAlertSuccess
) => {
  const { type, payload } = action;
  switch (type) {
    case 'SETALERT_SUCCESS':
      return [...state, payload];
    case 'REMOVEALERT_SUCCESS':
      return [...state.filter((alert) => alert.id !== payload)];
    default:
      return [...state];
  }
};

export default alert;

// import { ActionTypes } from '../actions/types';
// import { Alert, Action } from '../actions';

// const initialState: Alert[] = [
//   {
//     id: '',
//     msg: '',
//   },
// ];

// export default function alert(state: Alert[] = initialState, action: Action) {
//   const { type, payload } = action;
//   switch (type) {
//     case ActionTypes.SETALERT:
//       return [...state, payload];
//     case ActionTypes.REMOVEALERT:
//       return state.filter((alert) => alert.id !== payload);
//     default:
//       return state;
//   }
// }
