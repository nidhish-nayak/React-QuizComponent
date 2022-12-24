import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position: 1
        }
    }
    handleResetClick() {
        this.setState({ quiz_position: 1 })
    }

    showNextQuestion() {
        let currentState = this.state.quiz_position + 1;
        this.setState({
            quiz_position: currentState
        })
        console.log('incremented ' + this.state.quiz_position)
    }
    render() {
        function isTrueFalse(a, b) {
            if ((a.quiz_position - 1) === b.quiz_questions.length) {
                return true
            }
        }
        const isQuizEnd = isTrueFalse(this.state, quizData);
        return (
            <div>
                {(isQuizEnd === true) ?
                    <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} /> :
                    <QuizQuestion showNextQuestionHandler={this.showNextQuestion.bind(this)} quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />}
            </div>
        )
    }
}

export default Quiz;