import { render } from '@redwoodjs/testing'

import StandUpPage from './StandUpPage'

describe('StandUpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StandUpPage />)
    }).not.toThrow()
  })
})
