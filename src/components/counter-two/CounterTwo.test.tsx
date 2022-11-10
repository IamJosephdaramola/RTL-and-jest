import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CounterTwo from './CounterTwo'

describe('CounterTwo', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    userEvent.setup()
    const handleIncrement = jest.fn()
    const handleDecrement = jest.fn()

    render(
      <CounterTwo
        count={0}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    )

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const decrementButton = screen.getByRole('button', { name: 'Decrement' })
    await userEvent.click(incrementButton)
    await userEvent.click(decrementButton)

    expect(handleIncrement).toHaveBeenCalledTimes(1)
    expect(handleDecrement).toHaveBeenCalledTimes(1)
  })
})
