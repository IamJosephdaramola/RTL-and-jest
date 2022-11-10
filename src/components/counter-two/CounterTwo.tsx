import { CounterTwoProps } from './CounterTwo.types'

export default function CounterTwo(props: CounterTwoProps) {
  const { count, handleIncrement, handleDecrement } = props

  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && (
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      )}
      {handleDecrement && (
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
      )}
    </div>
  )
}
