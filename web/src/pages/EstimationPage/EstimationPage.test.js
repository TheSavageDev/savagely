import { render } from '@redwoodjs/testing'

import EstimationPage from './EstimationPage'

describe('EstimationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EstimationPage />)
    }).not.toThrow()
  })
})
