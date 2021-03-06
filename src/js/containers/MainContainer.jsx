import { connect } from 'react-redux';
import Main from 'components/Main';

const mapStateToProps = (state) =>
	({
		selectedNavItem: state.selectedNavItem,
	});


const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
