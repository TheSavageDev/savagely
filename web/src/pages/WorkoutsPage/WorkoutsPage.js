import { Label, Form, FormError, Submit, TextField } from '@redwoodjs/forms'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { CSS } from './styles'
import { toastOptions } from 'src/constants'
import WorkoutsCell, {
  QUERY as WorkoutsQuery,
} from 'src/components/WorkoutsCell/WorkoutsCell'

const CREATE_WORKOUT = gql`
  mutation CreateWorkoutMutation($input: CreateWorkoutInput!) {
    createWorkout(input: $input) {
      id
    }
  }
`

const WorkoutsPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_WORKOUT, {
    onCompleted: () => {
      toast.success('Workout Saved. Get Ready for the pain!')
      formMethods.reset()
    },
    refetchQueries: [{ query: WorkoutsQuery }],
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <MainLayout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
      <section className="flex justify-between">
        <section className={CSS.mainSection}>
          <h2 className={CSS.heading}>Workout List</h2>
          <WorkoutsCell />
        </section>
        <section className={CSS.mainSection}>
          <h1 className={CSS.heading}>Create a Workout</h1>
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
                <Label name="title" className={CSS.label} />
                <TextField
                  name="title"
                  type="text"
                  className={CSS.inputField}
                  required
                />
              </section>
            </section>
            <Submit disabled={loading} className={CSS.generateButton}>
              Start Building
            </Submit>
          </Form>
        </section>
      </section>
    </MainLayout>
  )
}

export default WorkoutsPage
