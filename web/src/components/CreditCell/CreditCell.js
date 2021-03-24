import { useMutation } from '@redwoodjs/web'
import { QUERY as CreditsQuery } from 'src/components/CreditsCell'

export const QUERY = gql`
  query CreditQuery($id: Int!) {
    credit(id: $id) {
      id
    }
  }
`

const DELETE = gql`
  mutation DeleteCreditMutation($id: Int!) {
    deleteCredit(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ credit }) => {
  const { id, date, amount, notes, accountId } = credit
  const [deleteCredit] = useMutation(DELETE, {
    refetchQueries: [{ query: CreditsQuery, variables: { accountId } }],
  })
  const handleDelete = (id) => {
    deleteCredit({ variables: { id } })
  }
  return (
    <section key={id} className="relative">
      <p>{new Date(date).toDateString()}</p>
      <p>{amount}</p>
      <p>{notes}</p>
      <button
        className="absolute top-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </section>
  )
}
