import { render } from '@redwoodjs/testing'

import AddCreditForm from './AddCreditForm'

describe('AddCreditForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddCreditForm />)
    }).not.toThrow()
  })
})
