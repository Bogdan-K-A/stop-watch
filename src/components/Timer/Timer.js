import React from 'react'
import useTimer from '../../hook/useTimer'
import { formatTimer } from '../../utils/utils'

const Timer = () => {
  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0)

  return (
    <div>
      <p>{formatTimer(timer)}</p>
      <div>
        {!isActive && !isPaused ? (
          <button type="batton" onClick={handleStart}>
            Start
          </button>
        ) : isPaused ? (
          <button type="batton" onClick={handlePause}>
            Pause
          </button>
        ) : (
          <button type="batton" onClick={handleResume}>
            Resume
          </button>
        )}
        <button type="batton" onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default Timer
