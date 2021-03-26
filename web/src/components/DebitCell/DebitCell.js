import { useMutation } from '@redwoodjs/web'
import { QUERY as DebitsQuery } from 'src/components/DebitsCell'

export const QUERY = gql`
  query DebitQuery($id: Int!) {
    debit(id: $id) {
      id
    }
  }
`

const DELETE = gql`
  mutation DeleteDebitMutation($id: Int!) {
    deleteDebit(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ debit }) => {
  const { id, date, amount, notes, accountId } = debit
  console.log(accountId)
  const [deleteDebit] = useMutation(DELETE, {
    refetchQueries: [{ query: DebitsQuery, variables: { accountId } }],
  })
  const handleDelete = (id) => {
    deleteDebit({ variables: { id } })
  }
  return (
    <section key={id} className="relative">
      <p>{new Date(date).toDateString()}</p>
      <p>${amount}</p>
      <p>{notes}</p>
      <button
        className="absolute top-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
      <hr className="border-gray-200" />
    </section>
  )
}
