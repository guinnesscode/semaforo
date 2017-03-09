import React from 'react';

import CategoryPicker from 'components/CategoryPicker'
import Header from 'components/Header';
import Light from 'components/Light';

const Main = function () {
    return (
        <div className="wauf">
        	<Header />
        	<CategoryPicker />
        	<Light />
        </div>
    );
};

export { Main as default };
