import { render } from '@redwoodjs/testing'

import InputField from './InputField'

describe('InputField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputField />)
    }).not.toThrow()
  })
})
