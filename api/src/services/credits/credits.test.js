import { credits } from './credits'

describe('credits', () => {
  scenario('returns all credits', async (scenario) => {
    const result = await credits()

    expect(result.length).toEqual(Object.keys(scenario.credit).length)
  })
})
