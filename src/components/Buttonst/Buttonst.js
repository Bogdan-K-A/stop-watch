import React from 'react'
import s from './Buttons.module.css'

const Buttonst = ({ start, reset, wait }) => {
  return (
    <div>
      <button className={s.TimerBtn} type="button" onClick={start}>
        Start/Stop
      </button>

      <button className={s.TimerBtn} type="button" onClick={wait}>
        Wait
      </button>
      <button className={s.TimerBtn} type="button" onClick={reset}>
        Reset
      </button>
    </div>
  )
}

export default Buttonst
