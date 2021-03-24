import Account from '../Account/Account'

export const QUERY = gql`
  query AccountQuery($id: String!) {
    account(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div className="flex flex-col justify-around w-1/3 mt-12 bg-gray-100 mx-auto rounded-xl p-4">
    Error: {error.message}
  </div>
)

export const Success = ({ account }) => {
  return <Account account={account} />
}
