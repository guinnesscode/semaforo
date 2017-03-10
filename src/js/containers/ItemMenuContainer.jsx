import { connect } from 'react-redux';
import * as Actions from 'actions/SemaforoActions';
import ItemMenu from 'components/ItemMenu';

const mapStateToProps = (state) =>
	({
		selectedNavItem: state.selectedNavItem,
	});

const mapDispatchToProps = (dispatch) =>
	({
		setActiveItem: (selectedItemName) => {
			dispatch(Actions.setActiveItem(selectedItemName));
		},
	});

export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
