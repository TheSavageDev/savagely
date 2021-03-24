import ExercisesCell from '../ExercisesCell/ExercisesCell'
import ExerciseForm from 'src/components/ExerciseForm'

const Workout = ({ workout }) => {
  console.log(workout)
  return (
    <section className="flex justify-between">
      <section className="w-1/3 mx-auto mt-12 p-6 bg-gray-200 shadow rounded-xl ring ring-yellow-600 ring-offset-4 ring-offset-black">
        <h2 className="text-2xl">{workout.title}</h2>
        <ExercisesCell workoutId={workout.id} />
      </section>
      <section className="w-1/3 mx-auto mt-12 p-6 bg-gray-200 shadow rounded-xl ring ring-yellow-600 ring-offset-4 ring-offset-black">
        <ExerciseForm workoutId={workout.id} />
      </section>
    </section>
  )
}

export default Workout
