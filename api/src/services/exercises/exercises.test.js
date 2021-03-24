import { exercises } from './exercises'

describe('exercises', () => {
  scenario('returns all exercises', async (scenario) => {
    const result = await exercises()

    expect(result.length).toEqual(Object.keys(scenario.exercise).length)
  })
})
