import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  Submit,
  SelectField,
  NumberField,
  TextField,
  TextAreaField,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import { QUERY as ExercisesQuery } from 'src/components/ExercisesCell'
import { CSS } from './styles'

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

const Checkbox = ({ name }) => {
  return (
    <article className={CSS.checkbox}>
      <CheckboxField name={name} />
      <Label name={name} className={CSS.checkboxLabel} />
    </article>
  )
}

const Select = ({ title, name, options = [] }) => {
  return (
    <article className={CSS.input}>
      <Label className={CSS.label}>{title}</Label>
      <SelectField
        name={name}
        className={CSS.selectField}
        errorClassName={CSS.selectFieldError}
        validation={{ required: true }}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </SelectField>
      <FieldError name={name} className={CSS.fieldErrorText} />
    </article>
  )
}

const InputField = ({ name, type, required }) => {
  return (
    <article className={CSS.input}>
      <Label
        name={name}
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      {type === 'text' ? (
        <TextField
          name={name}
          validation={{ required }}
          className={CSS.inputField}
          errorClassName={CSS.fieldError}
        />
      ) : type === 'area' ? (
        <TextAreaField
          name="instructions"
          type="area"
          className={CSS.textAreaField}
        />
      ) : (
        <NumberField
          name={name}
          validation={{ required }}
          className={CSS.inputField}
          errorClassName={CSS.fieldError}
        />
      )}
      <FieldError name={name} className={CSS.fieldErrorText} />
    </article>
  )
}

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
      <h2 className={CSS.exerciseFormHeading}>Create Exercise</h2>
      <section className={CSS.exerciseForm}>
        <section className={CSS.section}>
          <InputField name="name" type="text" required />
          <InputField name="minutes" type="number" />
          <InputField name="sets" type="number" />
          <InputField name="reps" type="number" />
          <InputField name="weight" type="number" />
          <InputField name="instructions" type="area" />
        </section>
        <section className={CSS.section}>
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
          <h2 className={CSS.sectionHeading}>Muscle Group(s)</h2>
          <Checkbox label="Abs" name="abs" />
          <Checkbox label="Arms" name="arms" />
          <Checkbox label="Back" name="back" />
          <Checkbox label="Chest" name="chest" />
          <Checkbox label="Legs" name="legs" />
          <Checkbox label="Shoulders" name="shoulders" />
        </section>
      </section>
      <Submit disabled={loading} className={CSS.generateButton}>
        Save Exercise
      </Submit>
    </Form>
  )
}

export default ExerciseForm
