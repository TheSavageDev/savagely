import { Form, FormError } from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import { QUERY as ExercisesQuery } from 'src/components/ExercisesCell'
import InputField from 'src/components/InputField'
import Select from 'src/components/Select'
import Checkbox from 'src/components/Checkbox'
import SubmitButton from 'src/components/SubmitButton'

const CREATE_EXERCISE = gql`
  mutation CreateExerciseMutation($input: CreateExerciseInput!) {
    createExercise(input: $input) {
      id
      name
      instructions
      reps
      sets
      weight
      minutes
      level
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

const ExerciseForm = ({ workoutId }) => {
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
    >
      <FormError
        error={error || error}
        wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
        listClassName="list-disc ml-4"
        listItemClassName=""
      />
      <h2 className="text-2xl">Create Exercise</h2>
      <section className="flex justify-between mt-2">
        <section className="mx-2">
          <InputField name="name" type="text" required />
          <InputField name="minutes" type="number" />
          <InputField name="sets" type="number" />
          <InputField name="reps" type="number" />
          <InputField name="weight" type="number" />
          <InputField name="instructions" type="area" />
        </section>
        <section className="mx-2">
          <Select
            title="Difficulty Level"
            name="level"
            options={['Beginner', 'Intermediate', 'Advanced']}
          />
          <Select
            title="Equipment"
            name="equipment"
            options={['Body Weight', 'Free Weights', 'Gym']}
          />
        </section>
        <section className="mx-2">
          <h2 className="text-xl mb-2">Muscle Group(s)</h2>
          <Checkbox label="Abs" name="abs" />
          <Checkbox label="Arms" name="arms" />
          <Checkbox label="Back" name="back" />
          <Checkbox label="Chest" name="chest" />
          <Checkbox label="Legs" name="legs" />
          <Checkbox label="Shoulders" name="shoulders" />
        </section>
      </section>
      <SubmitButton disabled={loading} text="Save Exercise" />
    </Form>
  )
}

export default ExerciseForm
