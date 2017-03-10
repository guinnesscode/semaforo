import * as ActionTypes from '../constants/ActionTypes';

export function setActiveItem(selectedItemName) {
  return {
    type: ActionTypes.SET_ACTIVE_ITEM,
    selectedItemName,
  };
}

export function moveWord(word, itemKey) {
	return {
		type: ActionTypes.MOVE_WORD,
		word,
		itemKey,
	};
}

export function removeWord(word, currentKey) {
	return {
		type: ActionTypes.REMOVE_WORD,
		word,
		currentKey,
	};
}
