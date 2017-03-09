import React from 'react';


const Light = function () {
	return (
		<div className="text-center row">
			<div className="small-4 columns">
				<div className="card">
					<span className="badge alert">red light</span>
					<div className="card-section">section 1</div>
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

export { Light as default };