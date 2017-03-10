import React from 'react';

import { QUESTIONS, WORDS } from 'constants/navItems';


class ItemMenu extends React.PureComponent {
	renderItem (itemName) {
		let itemClass;
		if (this.props.selectedNavItem === itemName) {
			itemClass = 'active';
		} else {
			itemClass = '';
		}

		return (
			<li className={itemClass}>
				<a onClick={() => this.props.setActiveItem(itemName)}>
					{itemName}
				</a>
			</li>
		);
	}

	render () {
		return (
			<div className="row">
				<div className="columns margin-b--medium">
					<ul className="menu align-center">
						{this.renderItem(QUESTIONS)}
						{this.renderItem(WORDS)}
					</ul>
				</div>
			</div>
		)
	}
};

ItemMenu.propTypes = {
	selectedNavItem: React.PropTypes.string.isRequired,
	setActiveItem: React.PropTypes.func.isRequired,
};

export { ItemMenu as default };