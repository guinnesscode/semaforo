import { connect } from 'react-redux';
import * as Actions from 'actions/SemaforoActions';
import CategoryQuestions from 'components/CategoryQuestions';
import { getCategoryQuestions} from 'constants/categoryQuestionsMap';


const mapStateToProps = (state) =>
	({
		currentCategory: state.currentCategory,
		categoryQuestions: getCategoryQuestions(state.currentCategory),
		categorizedWords: state.categorizedWords,
	});

const mapDispatchToProps = (dispatch) =>
	({
		moveWords: (word, itemKey, activeColorKey) => {
			if (itemKey !== activeColorKey) {
				dispatch(Actions.removeWord(word, activeColorKey));
				dispatch(Actions.moveWord(word, itemKey));
			}
		},
	});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryQuestions);