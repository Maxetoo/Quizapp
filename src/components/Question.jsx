import React from 'react'

const Question = ({question, options, handleCorrectAnswer, selectedAnswer, correctAnswer}) => {
  return (
    <div className="question" >
        <div className="question-container">
            <h3>{question}</h3>
        </div>
        <div className="questions-list-container">
            {options.map((value, index) => {
                return <button 
                key={index}
                type='button'
                className={`${index === correctAnswer && (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) ? 'correct-answer-indicator' : ''}${index === selectedAnswer && selectedAnswer !== correctAnswer ? 'wrong-answer-indicator' : ''}`}
                 onClick={(e) => handleCorrectAnswer(e.currentTarget, index)}>
                <div className='correct-indicator'>
                </div>
                <p>{value}</p>
            </button>
            })}
        </div>
        </div>
  )
}

export default Question