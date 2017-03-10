import React from 'react';
import { Colors } from 'constants/categoryNames';

const SortedWords = function ({
	categorizedWords,
}) {
	return (
		<div className="text-center row">
			<div className="small-4 columns">
				<div className="card">
					<div className="light--mini light--red"></div>
					<div className="card-section">
						<ul className="text-justify">
							{ categorizedWords[0].map((color, i) =>
								<li key={i}>{color}</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			<div className="small-4 columns">
				<div className="card">
					<div className="light--mini light--yellow"></div>
					<div className="card-section">
						<ul className="text-justify">
							{ categorizedWords[1].map((color, i) =>
								<li key={i}>{color}</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			<div className="small-4 columns">
				<div className="card">
					<div className="light--mini light--green"></div>
					<div className="card-section">
						<ul className="text-justify">
							{ categorizedWords[2].map((color, i) =>
								<li key={i}>{color}</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export { SortedWords as default };