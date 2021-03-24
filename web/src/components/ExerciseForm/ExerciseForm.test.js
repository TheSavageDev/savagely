import { render } from '@redwoodjs/testing'

import ExerciseForm from './ExerciseForm'

describe('ExerciseForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExerciseForm />)
    }).not.toThrow()
  })
})
