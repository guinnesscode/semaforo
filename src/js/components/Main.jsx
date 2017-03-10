import React from 'react';

import CategoryPicker from 'components/CategoryPicker';
import Header from 'components/Header';
import { QUESTIONS, WORDS } from 'constants/navItems';
import CategoryQuestionsContainer from 'containers/CategoryQuestionsContainer';
import SortedWordsContainer from 'containers/SortedWordsContainer';
import ItemMenuContainer from 'containers/ItemMenuContainer';

const Main = function ({
	selectedNavItem,
}) {
    return (
        <div className="wauf">
        	<Header />
        	<CategoryPicker />
        	<ItemMenuContainer />
        	{ selectedNavItem === QUESTIONS && <CategoryQuestionsContainer /> }
        	{ selectedNavItem == WORDS && <SortedWordsContainer /> }
        </div>
    );
};

export { Main as default };
