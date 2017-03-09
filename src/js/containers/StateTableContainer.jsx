import { connect } from 'react-redux';
import StateTable from 'components/StateTable';

const mapStateToProps = function(state) {
	return {
		visibleStateRange: [...Array(5).keys()],
	};
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StateTable);