import { Form, FormError } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as DebitsQuery } from 'src/components/DebitsCell'
import InputField from 'src/components/InputField'
import SubmitButton from '../SubmitButton/SubmitButton'

const CREATE_DEBIT = gql`
  mutation CreateDebitMutation($input: CreateDebitInput!) {
    createDebit(input: $input) {
      id
      amount
    }
  }
`

const AddDebitForm = ({ accountId }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createDebit, { error }] = useMutation(CREATE_DEBIT, {
    onCompleted: () => {
      toast.success('Debit Saved')
      formMethods.reset()
    },
    refetchQueries: [{ query: DebitsQuery, variables: { accountId } }],
  })

  const onSubmit = (input) => {
    createDebit({ variables: { input: { accountId, ...input } } })
  }
  return (
    <Form
      validation={{ mode: 'onBlur' }}
      onSubmit={onSubmit}
      formMethods={formMethods}
      className="flex justify-center flex-col p-5"
    >
      <FormError
        error={error}
        wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
        listClassName="list-disc ml-4"
      />
      <article className="flex justify-between">
        <InputField name="amount" type="number" required />
        <InputField name="date" type="date" required />
      </article>
      <InputField name="notes" type="area" required />
      <SubmitButton text="Add Debit" />
    </Form>
  )
}

export default AddDebitForm
