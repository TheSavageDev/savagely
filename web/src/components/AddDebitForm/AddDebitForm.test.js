import { render } from '@redwoodjs/testing'

import AddDebitForm from './AddDebitForm'

describe('AddDebitForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddDebitForm />)
    }).not.toThrow()
  })
})
