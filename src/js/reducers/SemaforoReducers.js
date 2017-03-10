import { combineReducers } from 'redux';

import * as ActionTypes from '../constants/ActionTypes';
import { QUESTIONS, WORDS } from '../constants/navItems';

const initialState = {
  selectedNavItem: QUESTIONS,
};

function selectedNavItem(
  state = initialState.selectedNavItem,
  action,
) {
  switch (action.type) {
    case ActionTypes.SET_ACTIVE_ITEM:
      return action.selectedItemName;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedNavItem,
});

export default rootReducer;
