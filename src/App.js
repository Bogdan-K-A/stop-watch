import { useEffect, useState } from 'react'
import { interval, Subject, fromEvent, takeUntil, buffer } from 'rxjs'
// import {  } from 'rxjs/operators'
import Buttonst from './components/Buttonst/Buttonst'
import Display from './components/Display/Display'
import { Container } from './components/container/Container'

const App = () => {
  const [time, setTime] = useState(0)
  const [watchOn, setWatchOn] = useState(false)

  useEffect(() => {
    const onsubscribe = new Subject()

    interval(10)
      .pipe(takeUntil(onsubscribe))
      .subscribe(() => {
        if (watchOn) {
          setTime((val) => val + 1)
        }
      })
    return () => {
      onsubscribe.next()
      onsubscribe.complete()
    }
  }, [watchOn])

  const handleStart = () => {
    setWatchOn((prevState) => {
      if (prevState) {
        setTime(0)
        return
      }
      return !prevState
    })
  }

  const handelWait = (e) => {
    const clicks = fromEvent(e.target, 'click')
    let scissor = interval(300)
    const result = clicks.pipe(buffer(scissor))

    result.subscribe((v) => {
      if (v.length === 2) {
        console.log('double click')
        if (time !== 0) {
          setWatchOn(false)
        }
      }
    })
  }

  const handlerReset = () => {
    setWatchOn((prevState) => {
      if (prevState) {
        // console.log('reset')
        setTime(0)
        return prevState
      }
    })
  }

  return (
    <Container>
      <Display time={time} />
      <Buttonst start={handleStart} wait={handelWait} reset={handlerReset} />
    </Container>
  )
}

export default App
