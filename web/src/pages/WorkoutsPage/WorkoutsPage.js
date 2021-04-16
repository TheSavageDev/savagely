import { Form, FormError } from '@redwoodjs/forms'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import { toastOptions } from 'src/constants'
import WorkoutsCell, {
  QUERY as WorkoutsQuery,
} from 'src/components/WorkoutsCell/WorkoutsCell'
import InputField from 'src/components/InputField/InputField'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const CREATE_WORKOUT = gql`
  mutation CreateWorkoutMutation($input: CreateWorkoutInput!) {
    createWorkout(input: $input) {
      id
    }
  }
`

const WorkoutsPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { error }] = useMutation(CREATE_WORKOUT, {
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
        <section className="w-1/3 mx-auto mt-12 p-6 text-white rounded-2xl shadow-2xl bg-white bg-opacity-5">
          <h2 className="text-3xl">Workout List</h2>
          <WorkoutsCell />
        </section>
        <section className="w-1/3 mx-auto mt-12 p-6 text-white rounded-2xl shadow-2xl bg-white bg-opacity-5">
          <h1 className="text-3xl">Create a Workout</h1>
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
            <h2 className="text-2xl mb-4">Create Exercise</h2>
            <InputField name="title" type="text" />
            <SubmitButton text="Start Building" />
          </Form>
        </section>
      </section>
    </MainLayout>
  )
}

export default WorkoutsPage
