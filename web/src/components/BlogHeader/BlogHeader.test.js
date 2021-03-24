import { render } from '@redwoodjs/testing'

import BlogHeader from './BlogHeader'

describe('BlogHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BlogHeader />)
    }).not.toThrow()
  })
})
