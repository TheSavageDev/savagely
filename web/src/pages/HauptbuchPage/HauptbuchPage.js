/**
 * Type Of Account | Increases Balance | Decreases Balance
 * Assets | Debit | Credit
 * Liabilities | Credit | Debit
 * Revenue | Credit | Debit
 * Expenses | Debit | Credit
 * Equity | Credit | Debit
 */
import { Form } from '@redwoodjs/forms/dist'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'
import { useForm } from 'react-hook-form'
import { toastOptions } from 'src/constants'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import AccountsCell from 'src/components/AccountsCell'
import InputField from 'src/components/InputField/InputField'
import { QUERY as AccountsQuery } from 'src/components/AccountsCell'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const CREATE = gql`
  mutation CreateAccountMutation($input: CreateAccountInput!) {
    createAccount(input: $input) {
      id
    }
  }
`

const HauptbuchPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [createAccount] = useMutation(CREATE, {
    onCompleted: () => {
      toast.success('Account Created')
      formMethods.reset()
    },
    refetchQueries: [{ query: AccountsQuery }],
  })

  const onSubmit = (input) => {
    createAccount({ variables: { input } })
  }

  return (
    <MainLayout>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={toastOptions}
      />
      <section className="bg-red-300 text-red-900 text-4xl mx-auto text-center rounded-xl mt-2 py-5">
        Work In Progress
      </section>
      <section className="flex justify-around mt-12 mb-4">
        <section className="flex flex-col justify-center items-center p-6 text-gray-200 rounded-xl ring ring-yellow-600">
          <h2 className="text-4xl mb-2">Accounts</h2>
          <AccountsCell />
        </section>
      </section>
      <Form
        className="w-1/4 mx-auto flex flex-col"
        onSubmit={onSubmit}
        formMethods={formMethods}
        validation={{ mode: 'onBlur' }}
      >
        <InputField name="name" type="text" required />
        <InputField name="number" type="number" required />
        <InputField name="balance" type="number" />
        <SubmitButton text="Add Account" />
      </Form>
    </MainLayout>
  )
}

export default HauptbuchPage
