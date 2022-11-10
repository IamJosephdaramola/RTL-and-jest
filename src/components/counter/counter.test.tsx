import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('should render', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
  })

  test('should a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    expect(countElement).toHaveTextContent('0')
  })

  test('should increment the count', async () => {
    userEvent.setup()
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await userEvent.click(incrementButton)
    expect(countElement).toHaveTextContent('1')
  })

  test('should render a count of 2 when incremented twice', async () => {
    userEvent.setup()
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await userEvent.click(incrementButton)
    await userEvent.click(incrementButton)
    expect(countElement).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking the set button', async () => {
    userEvent.setup()
    render(<Counter />)
    const countElement = screen.getByRole('heading', { level: 1 })
    const setButton = screen.getByRole('button', { name: 'Set' })
    const inputElement = screen.getByRole('spinbutton')

    await userEvent.type(inputElement, '10')
    expect(inputElement).toHaveValue(10)
    await userEvent.click(setButton)
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    userEvent.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const setButton = screen.getByRole('button', { name: 'Set' })
    const inputElement = screen.getByRole('spinbutton')

    await userEvent.tab()
    expect(incrementButton).toHaveFocus()

    await userEvent.tab()
    expect(inputElement).toHaveFocus()

    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})
