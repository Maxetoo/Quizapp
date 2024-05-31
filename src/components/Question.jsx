import React from 'react'

const Question = ({question, options, handleCorrectAnswer, selectedAnswer, correctAnswer}) => {

    // We are passing props : (question, options, handleCorrectAnswer, selectedAnswer, correctAnswer) to the Quiz component

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

                // This logic is used for the correct answer indicator whereas if the selected button index is same with the correct answer or if selected button index is equal to the correct answer, make use of the green color indicator to indicate correct answer. Same logic applies to the wrong answer indicator

                className={`${index === correctAnswer && (selectedAnswer === correctAnswer || selectedAnswer !== correctAnswer) ? 'correct-answer-indicator' : ''}${index === selectedAnswer && selectedAnswer !== correctAnswer ? 'wrong-answer-indicator' : ''}`}
                 
                 
                // This click function performs the action of selecting an option from the list of options. It accepts two parameters: "e.currentTarget" which is the button DOM and "index" : which is the index of the button
                
                
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