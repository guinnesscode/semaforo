import React from 'react';
import { Colors } from 'constants/categoryNames';
import { getCategoryQuestions } from 'constants/categoryQuestionsMap';


class CategoryQuestions extends React.PureComponent {
	constructor (props) {
		super(props);

		this.state = {
			currentQuestionIndex: 0,
			lightColors: ['red', 'yellow', 'green'],
			currentQuestion: this.props.categoryQuestions[2],
		};
	}

	getActiveColorKey () {
		const word = this.state.currentQuestion.word;

		if (this.props.categorizedWords[0].indexOf(word) > -1) {
			return 0;
		} else if (this.props.categorizedWords[1].indexOf(word) > -1) {
			return 1;
		} else {
			return 2;
		}
	}

	renderQuestion (question) {
		return (
			<div>
				<div className="row text-center">
					<div className="columns"><h4>{ question.word }</h4></div>
				</div>
				<div className="row text-center">
					<div className="columns"><h3>{ question.sentence }</h3></div>
				</div>
			</div>
		)
	}

	renderLight (color, index, activeColorKey) {
		const lightClassNames = ['light', `light--${color}`, 'center-margin'].join(' ');

		return (
			<div className="shrink columns margin-tb--v-small" key={index}>
				<div
					className={lightClassNames}
					onClick={() => this.props.moveWords(this.state.currentQuestion.word, index, activeColorKey)}
				>
					{ index === activeColorKey &&
						<p className="active-check">&#x2714;</p>
					}
				</div>
			</div>
		)
	}

	renderLights () {
		const activeColorKey = this.getActiveColorKey();
		return (
			<div className="row align-spaced medium-unstack margin-tb--large">
				{ this.state.lightColors.map((color, i) =>
					this.renderLight(color, i, activeColorKey)
				)}
			</div>
		)
	}

	render () {
		return (
			<div>
				{ this.renderQuestion(this.state.currentQuestion) }
				{ this.renderLights() }
			</div>
		)
	}
};

CategoryQuestions.propTypes = {
	currentCategory: React.PropTypes.string.isRequired,
	categoryQuestions: React.PropTypes.arrayOf(React.PropTypes.shape({
		word: React.PropTypes.string.isRequired,
		sentence: React.PropTypes.string.isRequired,
	})).isRequired,
};

export { CategoryQuestions as default };