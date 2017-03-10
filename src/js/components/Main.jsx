import React from 'react';

import CategoryPicker from 'components/CategoryPicker';
import Header from 'components/Header';
import WordLight from 'components/WordLight';
import { QUESTIONS, WORDS } from 'constants/navItems';
import CategoryQuestionsContainer from 'containers/CategoryQuestionsContainer';
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
        	{ selectedNavItem == WORDS && <WordLight /> }
        </div>
    );
};

export { Main as default };
