import { Form, FormError } from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'
import InputField from 'src/components/InputField'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }
  return (
    <MainLayout>
      <section className="w-1/3 mx-auto mt-12 p-6 text-white rounded-xl shadow-2xl bg-white bg-opacity-5">
        <h2 className="text-4xl">Don&apos;t Contact me, Bro</h2>
        <Toaster
          timeout={2000}
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              margin: '1rem',
              background: '#606C38',
              color: '#fefae0',
              zIndex: 1,
            },
            duration: 5000,
            success: {
              duration: 5000,
              theme: {
                primary: '#606C38',
                secondary: 'black',
              },
            },
          }}
        />
        <Form
          onSubmit={onSubmit}
          validation={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          <FormError
            error={error}
            wrapperClassName="py-4 px-6 rounded-lg bg-red-100 text-red-700"
            listClassName="list-disc ml-4"
            listItemClassName=""
          />
          <InputField name="name" type="text" required />
          <InputField name="email" type="text" required />
          <InputField name="message" type="area" required />
          <SubmitButton text="Save" />
        </Form>
      </section>
    </MainLayout>
  )
}

export default ContactPage
