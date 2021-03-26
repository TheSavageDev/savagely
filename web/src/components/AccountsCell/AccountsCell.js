import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query AccountsQuery {
    accounts {
      id
      name
      number
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ accounts }) => {
  const assets = []
  const liabilities = []
  const equity = []
  const revenues = []
  const expenses = []

  accounts.map((account) => {
    if (account.number < 2000) {
      assets.push(account)
    } else if (account.number >= 2000 && account.number < 3000) {
      liabilities.push(account)
    } else if (account.number >= 3000 && account.number < 4000) {
      equity.push(account)
    } else if (account.number >= 4000 && account.number < 5000) {
      revenues.push(account)
    } else if (account.number >= 5000 && account.number < 6000) {
      expenses.push(account)
    }
  })
  return (
    <section className="flex justify-evenly w-full">
      <article className="mx-5">
        <h2 className="text-3xl mb-2">Assets</h2>
        {assets.map((account) => (
          <Link
            key={account.id}
            to={routes.account({ id: account.id })}
            className="block pl-2"
          >
            {account.name}
          </Link>
        ))}
      </article>
      <article className="mx-3">
        <h2 className="text-3xl mb-2">Liabilities</h2>
        {liabilities.map((account) => (
          <Link
            key={account.id}
            to={routes.account({ id: account.id })}
            className="block pl-2"
          >
            {account.name}
          </Link>
        ))}
      </article>
      <article className="mx-3">
        <h2 className="text-3xl mb-2">Equity</h2>
        {equity.map((account) => (
          <Link
            key={account.id}
            to={routes.account({ id: account.id })}
            className="block pl-2"
          >
            {account.name}
          </Link>
        ))}
      </article>
      <article className="mx-3">
        <h2 className="text-3xl mb-2">Revenues</h2>
        {revenues.map((account) => (
          <Link
            key={account.id}
            to={routes.account({ id: account.id })}
            className="block pl-2"
          >
            {account.name}
          </Link>
        ))}
      </article>
      <article className="mx-3">
        <h2 className="text-3xl mb-2">Expenses</h2>
        {expenses.map((account) => (
          <Link
            key={account.id}
            to={routes.account({ id: account.id })}
            className="block pl-2"
          >
            {account.name}
          </Link>
        ))}
      </article>
    </section>
  )
}
