import React, {useState} from 'react'
import Quiz from './components/Quiz'
import Onboarding from './components/Onboarding'

const App = () => {
  const [onboardingDone, setOnboardingDone] = useState(false)

  const startApp = () => {
    setOnboardingDone(true)
  }
  return (
    <React.Fragment>
      {onboardingDone ? <Quiz/> : <Onboarding startApp={startApp}/>}
    </React.Fragment>
  )
}

export default App