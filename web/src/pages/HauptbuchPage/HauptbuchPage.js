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
      <section className="bg-red-300 mx-auto text-center rounded-xl mt-2 w-1/4">
        <h2 className="text-red-900 text-4xl py-2">Work In Progress</h2>
      </section>
      <section className="flex justify-center mt-4 mb-4 mx-auto w-3/4">
        <section className="flex justify-around">
          <section className="flex flex-col justify-start items-center p-6 text-white rounded-xl shadow-2xl bg-white bg-opacity-5">
            <h2 className="text-4xl mb-2">Accounts</h2>
            <AccountsCell />
          </section>
        </section>
        <Form
          className="w-1/6 mx-auto flex flex-col p-6 rounded-xl shadow-2xl bg-white bg-opacity-5"
          onSubmit={onSubmit}
          formMethods={formMethods}
          validation={{ mode: 'onBlur' }}
        >
          <InputField name="name" type="text" required />
          <InputField name="number" type="number" required />
          <InputField name="balance" type="number" />
          <SubmitButton text="Add Account" />
        </Form>
      </section>
    </MainLayout>
  )
}

export default HauptbuchPage
