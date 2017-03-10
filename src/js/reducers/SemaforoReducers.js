import { combineReducers } from 'redux';

import * as ActionTypes from '../constants/ActionTypes';
import { getCategoryWords } from '../constants/categoryDetails';
import { Colors, red, yellow, green } from '../constants/categoryNames';
import { QUESTIONS, WORDS } from '../constants/navItems';

const initialState = {
  selectedNavItem: QUESTIONS,
  currentCategory: Colors,
  categorizedWords: [
    getCategoryWords(Colors),
    [],
    [],
  ],
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

function currentCategory(
  state = initialState.currentCategory,
  action,
) {
  switch (action.type) {
    default:
      return state;
  }
}

function categorizedWords(
  state = initialState.categorizedWords,
  action,
) {
  switch (action.type) {
    case ActionTypes.MOVE_WORD:
      state[action.itemKey].push(action.word);
      return [
        ...state.slice(0, action.itemKey),
        state[action.itemKey],
        ...state.slice(action.itemKey + 1)
      ];
    case ActionTypes.REMOVE_WORD:
      state[action.currentKey].splice(state[action.currentKey].indexOf(action.word, 1), 1)
      return [
        ...state.slice(0, action.currentKey),
        state[action.currentKey],
        ...state.slice(action.currentKey + 1),
      ]
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectedNavItem,
  currentCategory,
  categorizedWords,
});

export default rootReducer;
