import React from 'react';

import CategoryPicker from 'components/CategoryPicker';
import CategoryQuestions from 'components/CategoryQuestions';
import Header from 'components/Header';
import WordLight from 'components/WordLight';
import { QUESTIONS, WORDS } from 'constants/navItems';
import ItemMenuContainer from 'containers/ItemMenuContainer';

const Main = function ({
	selectedNavItem,
}) {
    return (
        <div className="wauf">
        	<Header />
        	<CategoryPicker />
        	<ItemMenuContainer />
        	{ selectedNavItem === QUESTIONS && <CategoryQuestions /> }
        	{ selectedNavItem == WORDS && <WordLight /> }
        </div>
    );
};

export { Main as default };
