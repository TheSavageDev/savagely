import { render } from '@redwoodjs/testing'

import WorkoutsPage from './WorkoutsPage'

describe('WorkoutsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkoutsPage />)
    }).not.toThrow()
  })
})
