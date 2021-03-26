import { Form, FormError, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as CreditsQuery } from 'src/components/CreditsCell'
import InputField from 'src/components/InputField'

const CREATE_CREDIT = gql`
  mutation CreateCreditMutation($input: CreateCreditInput!) {
    createCredit(input: $input) {
      id
      amount
    }
  }
`

const AddCreditForm = ({ accountId }) => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createCredit, { error }] = useMutation(CREATE_CREDIT, {
    onCompleted: () => {
      toast.success('Debit Saved')
      formMethods.reset()
    },
    refetchQueries: [{ query: CreditsQuery, variables: { accountId } }],
  })

  const onSubmit = (input) => {
    createCredit({ variables: { input: { accountId, ...input } } })
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
      <Submit className="block bg-gray-200 hover:bg-gray-800 text-gray-800 hover:text-gray-200 uppercase text-lg mx-auto py-1 rounded w-full">
        Add Debit
      </Submit>
    </Form>
  )
}

export default AddCreditForm
