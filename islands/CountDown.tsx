// islands/Countdown.tsx

/** @jsx h */
import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const timeFmt = new Intl.RelativeTimeFormat('en-US')

// The target date is passed as a string instead of as a `Date`, because the
// props to island components need to be JSON (de)serializable.
export default function Countdown(props: { target: string }) {
  const target = new Date(props.target)
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow((now) => {
        if (now > target) {
          clearInterval(timer)
        }
        return new Date()
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [props.target])

  const dateFuture = target.valueOf()
  const dateNow = now.valueOf()

  let seconds = Math.floor((dateFuture - dateNow) / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  hours = hours - days * 24
  minutes = minutes - days * 24 * 60 - hours * 60
  seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  const asString = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`

  return <span>{asString.toString()}</span>
}
