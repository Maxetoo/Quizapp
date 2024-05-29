import React from 'react'

const Onboarding = ({startApp}) => {
  return (
    <div className='onboarding'>
        <h3>Quiz App</h3>
        <p>This is a group project built with love from csc 208 react group</p>
        <button type='button' onClick={startApp}>start</button>
    </div>
  )
}

export default Onboarding