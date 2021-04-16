import ExercisesCell from '../ExercisesCell/ExercisesCell'
import ExerciseForm from 'src/components/ExerciseForm'
import { useState } from 'react'

const CSS = {
  button:
    'text-xl bg-brown text-white mx-4 my-2 rounded-full h-10/12 px-3 py-4 transition-all duration-300 hover:bg-brown',
}

const Workout = ({ workout }) => {
  const [openModal, setOpenModal] = useState({ isOpen: false, group: '' })
  console.log(workout)

  const handleOpenExerciseForm = (group) => {
    setOpenModal({
      isOpen: true,
      group,
    })
  }
  return (
    <section>
      <section className="flex justify-center mt-4 w-1/4 mx-auto flex-wrap items-center">
        <button
          onClick={() => {
            handleOpenExerciseForm('ab')
          }}
          className={CSS.button}
        >
          Abs
        </button>
        <button
          onClick={() => {
            handleOpenExerciseForm('arms')
          }}
          className={CSS.button}
        >
          Arms
        </button>
        <button
          onClick={() => {
            handleOpenExerciseForm('back')
          }}
          className={CSS.button}
        >
          Back
        </button>
        <button
          onClick={() => {
            handleOpenExerciseForm('chest')
          }}
          className={CSS.button}
        >
          Chest
        </button>
        <button
          onClick={() => {
            handleOpenExerciseForm('legs')
          }}
          className={CSS.button}
        >
          Legs
        </button>
        <button
          onClick={() => {
            handleOpenExerciseForm('shoulders')
          }}
          className={CSS.button}
        >
          Shoulders
        </button>
      </section>
      {openModal.isOpen ? (
        <section className="w-1/3 mx-auto mt-12 p-6 text-white rounded-xl shadow-2xl bg-white bg-opacity-5">
          <ExerciseForm
            workoutId={workout.id}
            group={openModal.group}
            setOpenModal={setOpenModal}
          />
        </section>
      ) : (
        <section className="flex justify-between">
          <section className="w-1/3 mx-auto mt-12 p-6 text-white rounded-xl shadow-2xl bg-white bg-opacity-5">
            <h2 className="text-2xl">{workout.title}</h2>
            <ExercisesCell workoutId={workout.id} />
          </section>
        </section>
      )}
    </section>
  )
}

export default Workout
