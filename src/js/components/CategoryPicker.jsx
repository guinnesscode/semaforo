import React from 'react';

import { allCategories } from 'constants/categoryNames';

const CategoryPicker = function () {
	return (
		<div className="text-center row">
			<div className="small-6 large-offset-3 small-offset-3 columns">
				<label>pick a category
					<select>
						{ allCategories.map((category, index) =>
							<option
								value={category}
								key={index}
							>
								{category}
							</option>
						)}
					</select>
				</label>
			</div>
		</div>
	);
};

export { CategoryPicker as default };