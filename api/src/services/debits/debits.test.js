import { debits } from './debits'

describe('debits', () => {
  scenario('returns all debits', async (scenario) => {
    const result = await debits()

    expect(result.length).toEqual(Object.keys(scenario.debit).length)
  })
})
