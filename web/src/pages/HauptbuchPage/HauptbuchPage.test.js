import { render } from '@redwoodjs/testing'

import HauptbuchPage from './HauptbuchPage'

describe('HauptbuchPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HauptbuchPage />)
    }).not.toThrow()
  })
})
