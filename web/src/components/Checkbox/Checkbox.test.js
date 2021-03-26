import { render } from '@redwoodjs/testing'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Checkbox />)
    }).not.toThrow()
  })
})
