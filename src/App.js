import { useEffect, useState } from 'react'
import { interval, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import Buttonst from './components/Buttonst/Buttonst'
import { Container } from './components/container/Container'
import Display from './components/Display/Display'

const App = () => {
  const [time, setTime] = useState(0)
  const [watchOn, setWatchOn] = useState(false)

  useEffect(() => {
    const onsubscribe = new Subject()
    console.log('Отработал useEffect')

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
        console.log('stop')
        setTime(0)
        return
      }
      console.log('start')
      return !prevState
    })
  }

  const handelWait = () => {
    if (time !== 0) {
      console.log('wait')
      setWatchOn(false)
    }

    //   .buffer(() => throttle(250))
    //   .map((arr) => arr.length)
    //   .filter((len) => len === 2)
  }

  const handlerReset = () => {
    setWatchOn((prevState) => {
      if (prevState) {
        console.log('reset')
        setTime(0)
        return prevState
      }
    })

    setTime(0)
  }

  return (
    <Container>
      <Display time={time} />
      <Buttonst start={handleStart} wait={handelWait} reset={handlerReset} />
    </Container>
  )
}

export default App
