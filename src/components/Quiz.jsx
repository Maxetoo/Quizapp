import React, {useState} from 'react'
import Question from './Question'
import {questions} from '../data/data'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswer, setUserAnswer] = useState('')
    const [btnIndexes, setBtnIndexes] = useState({correctBtnIndex: null, selectedBtnIndex: null})

    const {question, options, answer} = questions[currentQuestion]
    const {correctBtnIndex, selectedBtnIndex} = btnIndexes

    const handleSelectAnswer = (target, ind) => {
        const pElement = target.querySelector('p').innerText
        setUserAnswer(pElement)
        const findCorrectAnswerIndex = options.findIndex((value) => value === answer)

        setBtnIndexes(prevState => ({
            ...prevState,
            correctBtnIndex: findCorrectAnswerIndex,
            selectedBtnIndex: prevState.selectedBtnIndex !== null ? prevState.selectedBtnIndex : ind
        }));
        

        if (userAnswer) {
            return;
        } else if (!userAnswer && pElement === answer) {
            setScore(score + 1) 
        } 

    }

    const handleContinueQuestions = () => {
        const nextQuestion = currentQuestion + 1
        if (!userAnswer) {
            return;
        }
        else if (nextQuestion < questions.length && userAnswer) {
            setCurrentQuestion(nextQuestion)
            setBtnIndexes(prevState => ({
                        ...prevState,
                        correctBtnIndex: null,
                        selectedBtnIndex: null
                    }));
        } else {
            setShowResult(true)
        }
        setUserAnswer('')
    }

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setUserAnswer('')
        setBtnIndexes(prevState => ({
            ...prevState,
            correctBtnIndex: null,
            selectedBtnIndex: null
        }));
        setShowResult(false)
    }
  return (
    <React.Fragment>
        {showResult ? <div className='show-result'>
            <h3>Quiz Over!</h3>
            <p className="score-container">
                You got {score} out of {questions.length}
            </p>
            <button type='button' onClick={restartQuiz}>
                Restart
            </button>
        </div> : 
        <div className='quiz-container'>
        <h4>Question {currentQuestion + 1}/{questions.length}</h4>
        <div className="timer-container"></div>
        <Question 
        question={question} 
        options={options} 
        correctAnswer={correctBtnIndex}
        selectedAnswer={selectedBtnIndex}
        handleCorrectAnswer={handleSelectAnswer}
         />
        <button type='button' className='next-btn' onClick={handleContinueQuestions}>Continue</button>
    </div>}
    </React.Fragment>
    
  )
}

export default Quiz