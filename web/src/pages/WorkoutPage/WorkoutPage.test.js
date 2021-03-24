import { render } from '@redwoodjs/testing'

import WorkoutPage from './WorkoutPage'

describe('WorkoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorkoutPage />)
    }).not.toThrow()
  })
})
