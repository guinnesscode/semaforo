import React from 'react';
import { Colors } from 'constants/categoryNames';
import { getCategoryWords } from 'constants/categoryDetails';


const WordLight = function () {
	const colorWords = getCategoryWords(Colors);
	return (
		<div className="text-center row">
			<div className="small-4 columns">
				<div className="card">
					<span className="badge alert">red light</span>
					<div className="card-section">
						<ul className="text-justify">
							{ colorWords.map((color, i) =>
								<li key={i}>{color}</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			<div className="small-4 columns">
				<div className="card">
					<span className="badge warning">yellow light</span>
					<div className="card-section">section 2</div>
				</div>
			</div>
			<div className="small-4 columns">
				<div className="card">
					<span className="badge success">green light</span>
					<div className="card-section">section 3</div>
				</div>
			</div>
		</div>
	);
};

export { WordLight as default };