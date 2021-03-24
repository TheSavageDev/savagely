import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query AccountsQuery {
    accounts {
      id
      name
      balance
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ accounts }) => {
  return accounts.map((account) => (
    <Link key={account.id} to={routes.account({ id: account.id })}>
      {account.name} -- {account.balance}
    </Link>
  ))
}
