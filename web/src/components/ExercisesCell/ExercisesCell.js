export const QUERY = gql`
  query ExercisesQuery($workoutId: Int!) {
    exercises(workoutId: $workoutId) {
      id
      name
      minutes
      reps
      sets
      level
      equipment
      instructions
      weight
      abs
      arms
      back
      chest
      legs
      shoulders
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ exercises }) => {
  console.log(exercises)
  return exercises.map((exercise) => (
    <div key={exercise.id}>
      <h2 className="text-xl">{exercise.name}</h2>
      <article className="pl-4">
        {exercise.minutes ? (
          <time>{exercise.minutes} minute(s)</time>
        ) : (
          <article>
            <p>{exercise.sets} sets</p>
            <p>{exercise.reps} reps</p>
          </article>
        )}
        <p>Level: {exercise.level || 'None'}</p>
        <p>Equipment: {exercise.equipment || 'None'}</p>
        <p>Weight: {exercise.weight ? `${exercise.weight} lbs` : 'None'}</p>
        <h3 className="text-lg">Muscle Group(s)</h3>
        <ul>
          <li className="pl-4">{exercise.abs ? 'Abs' : null}</li>
          <li className="pl-4">{exercise.arms ? 'Arms' : null}</li>
          <li className="pl-4">{exercise.back ? 'Back' : null}</li>
          <li className="pl-4">{exercise.chest ? 'Chest' : null}</li>
          <li className="pl-4">{exercise.legs ? 'Legs' : null}</li>
          <li className="pl-4">{exercise.shoulders ? 'Shoulders' : null}</li>
        </ul>
        <h3>Instructions</h3>
        <p>{exercise.instructions}</p>
      </article>
      --------
    </div>
  ))
}
