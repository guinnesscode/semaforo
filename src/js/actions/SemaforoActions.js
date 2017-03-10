import * as ActionTypes from 'constants/ActionTypes';

export function setActiveItem(selectedItemName) {
  return {
    type: ActionTypes.SET_ACTIVE_ITEM,
    selectedItemName,
  };
}
