import CreditCell from 'src/components/CreditCell'

export const QUERY = gql`
  query CreditsQuery($accountId: String!) {
    credits(accountId: $accountId) {
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

export const Success = ({ credits }) => {
  return credits.map((credit) => (
    <CreditCell key={credit.id} id={credit.id} credit={credit} />
  ))
}
