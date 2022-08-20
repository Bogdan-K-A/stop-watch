import React from 'react'
import s from './Buttons.module.css'

const Buttonst = ({ start, reset, wait }) => {
  return (
    <ul className={s.wrapper}>
      <li>
        <button className={s.TimerBtn} type="button" onClick={start}>
          Start/Stop
        </button>
      </li>

      <li>
        <button className={s.TimerBtn} type="button" onClick={wait}>
          Wait
        </button>
      </li>
      <li>
        <button className={s.TimerBtn} type="button" onClick={reset}>
          Reset
        </button>
      </li>
    </ul>
  )
}

export default Buttonst
