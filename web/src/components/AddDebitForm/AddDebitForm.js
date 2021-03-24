import {
  Form,
  FormError,
  FieldError,
  Label,
  Submit,
  TextField,
  TextAreaField,
  DateField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { toast } from '@redwoodjs/web/toast'
import { QUERY as DebitsQuery } from 'src/components/DebitsCell'
import { CSS } from './styles'

const CREATE_DEBIT = gql`
  mutation CreateDebitMutation($input: CreateDebitInput!) {
    createDebit(input: $input) {
      id
      amount
    }
  }
`

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
          name={name}
          validation={{ required }}
          className={CSS.textAreaField}
        />
      ) : type === 'date' ? (
        <DateField
          name={name}
          validation={{ required }}
          className={CSS.inputField}
          errorClassName={CSS.fieldError}
        />
      ) : (
        <TextField
          name={name}
          validation={{ required }}
          className={CSS.inputField}
          errorClassName={CSS.fieldError}
          transformValue={(str) => parseFloat(str.replace(/,/g, ''), 10)}
        />
      )}
      <FieldError name={name} className={CSS.fieldErrorText} />
    </article>
  )
}

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
    >
      <FormError
        error={error}
        wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
        listClassName="list-disc ml-4"
      />
      <InputField name="amount" type="number" required />
      <InputField name="date" type="date" required />
      <InputField name="notes" type="area" required />
      <Submit>Add Debit</Submit>
    </Form>
  )
}

export default AddDebitForm
