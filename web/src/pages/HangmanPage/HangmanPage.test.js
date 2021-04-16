import { render } from '@redwoodjs/testing'

import HangmanPage from './HangmanPage'

describe('HangmanPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HangmanPage />)
    }).not.toThrow()
  })
})
