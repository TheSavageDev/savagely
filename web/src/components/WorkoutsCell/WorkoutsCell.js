import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

export const QUERY = gql`
  query WORKOUTS {
    workouts {
      id
      title
    }
  }
`

const DELETE = gql`
  mutation DeleteWorkoutMutation($id: Int!) {
    deleteWorkout(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ workouts }) => {
  const [deleteWorkout] = useMutation(DELETE, {
    refetchQueries: [
      {
        query: QUERY,
      },
    ],
  })

  const handleDelete = (id) => {
    if (confirm('Are you sure?')) {
      deleteWorkout({ variables: { id } })
    }
  }
  return workouts.map((workout) => (
    <article key={workout.id} className="relative flex justify-between">
      <Link to={routes.workout({ id: workout.id })} className="text-lg">
        {workout.title}
      </Link>
      <button
        className="absolute bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        onClick={() => handleDelete(workout.id)}
      >
        Delete
      </button>
    </article>
  ))
}
