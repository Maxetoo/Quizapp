import React, {useState, useEffect} from 'react'
import Question from './Question'
import {questions} from '../data/data'

const Quiz = ({totalTime, barWidth, remainingTime, resetTime, restartTimer, startTimer}) => {
    // We used useState Hook to create reusable states here
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswer, setUserAnswer] = useState('')
    const [btnIndexes, setBtnIndexes] = useState({correctBtnIndex: null, selectedBtnIndex: null})

    // We are spreading the values of the questions object and indexing with the currentQuestion state 

    const {question, options, answer} = questions[currentQuestion]

    // We are making use of the spread operator to bring out of the values in btnIndexes object 

    const {correctBtnIndex, selectedBtnIndex} = btnIndexes

    useEffect(() => {
        if (remainingTime <= 0) {
            setShowResult(true)
            resetTime()
        }
    }, [remainingTime]);

    

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
        // on every action call, nextQuestion variable is incremented by 1

        const nextQuestion = currentQuestion + 1
        
        // if userAnswer is empty, donnot perform any action by returning nothing  

        if (!userAnswer) {
            return;
        }

        else if (nextQuestion < questions.length && userAnswer) {

            setCurrentQuestion(nextQuestion)

            // on every click to continue quiz, set the correct answer and selected button index to default which is null 

            setBtnIndexes(prevState => ({
                        ...prevState,
                        correctBtnIndex: null,
                        selectedBtnIndex: null
                    }));
        } else {

            // if questions have been exhausted, show user result 

            setShowResult(true)
        }

        // set user answer to default on every click to continue quiz 

        setUserAnswer('')
    }

    // Restart quiz function resets all the used useState hooks 

    const restartQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setUserAnswer('')
        startTimer()
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
        <div className="timer-container">
            <p className='end'>0:{remainingTime < 10 ? `0${remainingTime}` : remainingTime}</p>
            <div className="progress-bar-container">
                <div className="bar" style={{
                    width: `${(barWidth / totalTime) * 100}%`
                }}></div>
            </div>
            <p className='stop'>0:{totalTime}</p>
        </div>
        <Question 
        question={question} 
        options={options} 
        correctAnswer={correctBtnIndex}
        selectedAnswer={selectedBtnIndex}
        handleCorrectAnswer={handleSelectAnswer}
         />
        <button type='button' className={`next-btn ${!userAnswer && 'next-btn-inactive'}`} onClick={handleContinueQuestions}>Continue</button>
    </div>}
    </React.Fragment>
    
  )
}

export default Quiz