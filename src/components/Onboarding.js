import React from 'react'

const Onboarding = ({startApp}) => {
  return (
    <div className='onboarding'>
        <h3>Quiz App</h3>
        <img src="https://img.freepik.com/free-vector/african-male-female-character-wearing-casual-clothes-different-hairstyles-gathered-black-people-crowd-demanding-equal-rights-every-person-flat-vector-illustration-black-community-concept_74855-22098.jpg?t=st=1717158666~exp=1717162266~hmac=9e6208e70b0a9d00e266f6c632f6d4be7c836f1d644f6f6bf7d397aa560ff76a&w=1800" alt="" />
        <p>This is a group project built with love from csc 214 react group</p>
        <button type='button' onClick={startApp}>start</button>
    </div>
  )
}

export default Onboarding