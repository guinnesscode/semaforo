import React from 'react';
import { Colors } from 'constants/categoryNames';
import { getCategoryQuestions } from 'constants/categoryQuestions';


const CategoryQuestions = function () {
	const categoryQuestions = getCategoryQuestions(Colors);
	return (
		<div className="text-center row">
			{ categoryQuestions.map((question, i) =>
				<div key={i}>
					<div>
					{question.word}
					</div>
					<div>
					{question.sentence}
					</div>
				</div>
			)}
		</div>
	);
};

export { CategoryQuestions as default };
	/*

	);
};
*/
