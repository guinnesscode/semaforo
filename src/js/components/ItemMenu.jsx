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
				<a
					onClick={() => this.props.setActiveItem(itemName)}
				>
					{itemName}
				</a>
			</li>
		);
	}

	render () {
		return (
			<div className="large-offset-3 columns menu-centered">
				<ul className="menu">
					{this.renderItem(QUESTIONS)}
					{this.renderItem(WORDS)}
				</ul>
			</div>
		)
	}
};

ItemMenu.propTypes = {
	selectedNavItem: React.PropTypes.string.isRequired,
	setActiveItem: React.PropTypes.func.isRequired,
};

export { ItemMenu as default };