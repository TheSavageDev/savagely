import { accounts } from './accounts'

describe('accounts', () => {
  scenario('returns all accounts', async (scenario) => {
    const result = await accounts()

    expect(result.length).toEqual(Object.keys(scenario.account).length)
  })
})
