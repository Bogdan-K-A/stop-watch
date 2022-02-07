import React from 'react'
import s from './Display.module.css'

const Display = ({ time }) => {
  return (
    <div className={s.Timer}>
      <span className={s.Field}>
        {('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className={s.Field}>
        {('0' + Math.floor(time / 6000)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className={s.Field}>
        {('0' + Math.floor((time / 100) % 60)).slice(-2)}
      </span>
      &nbsp;:&nbsp;
      <span className={s.Field}>
        {('0' + Math.floor(time % 100)).slice(-2)}
      </span>
    </div>
  )
}

export default Display
