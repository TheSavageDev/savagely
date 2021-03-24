import DebitCell from '../DebitCell/DebitCell'

export const QUERY = gql`
  query DebitsQuery($accountId: String!) {
    debits(accountId: $accountId) {
      id
      amount
      notes
      date
      accountId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div className="ml-4">Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ debits }) => {
  return debits.map((debit) => {
    return <DebitCell key={debit.id} debit={debit} id={debit.id} />
  })
}
