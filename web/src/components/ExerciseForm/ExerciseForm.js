import { Form, FormError } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import { QUERY as ExercisesQuery } from 'src/components/ExercisesCell'
import InputField from 'src/components/InputField'
import Select from 'src/components/Select'
import SubmitButton from 'src/components/SubmitButton'

const CREATE_EXERCISE = gql`
  mutation CreateExerciseMutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
      name
      reps
      sets
      weight
      equipment
      abs
      arms
      back
      chest
      legs
      shoulders
    }
  }
`

const ExerciseForm = ({ workoutId, group, setOpenModal }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createExercise, { loading, error }] = useMutation(CREATE_EXERCISE, {
    onCompleted: () => {
      toast.success('Exercise Saved')
      formMethods.reset()
    },
    refetchQueries: [{ query: ExercisesQuery, variables: { workoutId } }],
  })

  const onSubmit = (input) => {
    createExercise({ variables: { input: { workoutId, ...input } } })
  }
  return (
    <Form
      validation={{ mode: 'onBlur' }}
      onSubmit={onSubmit}
      formMethods={formMethods}
      className="relative"
    >
      <FormError
        error={error || error}
        wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
        listClassName="list-disc ml-4"
        listItemClassName=""
      />
      <button
        onClick={() => setOpenModal({ isOpen: false, group: '' })}
        className="absolute top-0 right-0 bg-red-500 text-xs rounded text-white px-2 py-1"
      >
        X
      </button>
      <h2 className="text-2xl">Create Exercise -- {group}</h2>
      <section className="flex justify-between mt-2">
        <section className="mx-2">
          <InputField name="sets" type="number" />
          <InputField name="reps" type="number" />
        </section>
        <section className="mx-2">
          <InputField name="weight" type="number" />
          <Select
            title="Equipment"
            name="equipment"
            options={['Body Weight', 'Free Weights', 'Gym']}
          />
        </section>
      </section>
      <SubmitButton disabled={loading} text="Save Exercise" />
    </Form>
  )
}

export default ExerciseForm
