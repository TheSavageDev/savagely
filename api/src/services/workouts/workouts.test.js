import { workouts } from './workouts'

describe('workouts', () => {
  scenario('returns all workouts', async (scenario) => {
    const result = await workouts()

    expect(result.length).toEqual(Object.keys(scenario.workout).length)
  })
})
