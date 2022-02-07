import { useEffect, useState } from 'react'
import { interval, Subject, takeUntil } from 'rxjs'
import Buttonst from './components/Buttonst/Buttonst'
import { Container } from './components/container/Container'
import Display from './components/Display/Display'

const App = () => {
  const [time, setTime] = useState(0)
  const [watchOn, setWatchOn] = useState(false)
  const [status, setStatus] = useState(0)

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
    setWatchOn((prevState) => !prevState)
    setStatus(1)
  }

  const handelResume = () => {
    handleStart()
  }

  const handleStop = () => {
    if (time !== 0) {
      setWatchOn(false)
    }
    setStatus(2)
  }

  const handlerReset = () => {
    setTime(0)
    setStatus(0)
    setWatchOn(false)
  }

  return (
    <Container>
      <Display time={time} />
      <Buttonst
        start={handleStart}
        stop={handleStop}
        resume={handelResume}
        reset={handlerReset}
        status={status}
      />
    </Container>
  )
}

export default App
