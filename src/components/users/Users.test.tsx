import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import Users from './Users'
import { server } from '../mocks/server'

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByRole('heading', {
      level: 1,
    })
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole(
      'listitem',
      {},
      {
        timeout: 100000,
      }
    )
    expect(users).toHaveLength(3)
  })

  test('renders "Error fetching users" when there is an error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500))
        }
      )
    )

    render(<Users />)
    const error = await screen.findByText('Error fetching users')
    expect(error).toBeInTheDocument()
  })
})
