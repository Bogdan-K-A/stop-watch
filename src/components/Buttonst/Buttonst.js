import React from 'react'
import s from './Buttons.module.css'

const Buttonst = ({ start, stop, reset, resume, status }) => {
  return (
    <div>
      {status === 0 ? (
        <button className={s.TimerBtn} type="button" onClick={start}>
          Start
        </button>
      ) : (
        ''
      )}

      {status === 1 ? (
        <>
          <button className={s.TimerBtn} type="button" onClick={stop}>
            Stop
          </button>
          <button className={s.TimerBtn} type="button" onClick={reset}>
            Reset
          </button>
        </>
      ) : (
        ''
      )}

      {status === 2 ? (
        <>
          <button className={s.TimerBtn} type="button" onClick={resume}>
            Resume
          </button>
          <button className={s.TimerBtn} type="button" onClick={reset}>
            Reset
          </button>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default Buttonst
