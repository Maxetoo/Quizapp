import React, {useState, useEffect} from 'react'
import Quiz from './components/Quiz'
import Onboarding from './components/Onboarding'

const App = () => {
  const totalTime = 59
  const [onboardingDone, setOnboardingDone] = useState(false)
  const [seconds, setSeconds] = useState(totalTime);
    const [timerIsActive, setTimerIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (timerIsActive && seconds > 0) {
        timer = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);
    } else if (seconds === 0) {
        clearInterval(timer);
        setTimerIsActive(false);
    }

    return () => clearInterval(timer);

}, [timerIsActive, seconds]);

const startTimer = () => {
    if (seconds > 0) {
        setTimerIsActive(true);
    }
};

const resetTimer = () => {
    setTimerIsActive(false);
    setSeconds(totalTime);
};

  const startApp = () => {
    setOnboardingDone(true)
    startTimer()
  }
  return (
    <React.Fragment>
      {onboardingDone ? 
      <Quiz 
      totalTime={totalTime} 
      remainingTime={seconds} 
      barWidth={seconds} 
      resetTime={resetTimer}
      startTimer={startApp}
      /> : 
      <Onboarding startApp={startApp}/>}
    </React.Fragment>
  )
}

export default App