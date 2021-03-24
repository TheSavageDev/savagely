import Workout from 'src/components/Workout'

export const QUERY = gql`
  query WorkoutQuery($id: Int!) {
    workout(id: $id) {
      id
      exercises {
        id
      }
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ workout }) => {
  return <Workout workout={workout} />
}
