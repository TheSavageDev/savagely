import { render } from '@redwoodjs/testing'

import RetroactivePage from './RetroactivePage'

describe('RetroactivePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RetroactivePage />)
    }).not.toThrow()
  })
})
