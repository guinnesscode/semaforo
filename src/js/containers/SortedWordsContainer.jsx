import { connect } from 'react-redux';
import SortedWords from 'components/SortedWords';


const mapStateToProps = (state) =>
	({
		categorizedWords: state.categorizedWords,
	});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SortedWords);