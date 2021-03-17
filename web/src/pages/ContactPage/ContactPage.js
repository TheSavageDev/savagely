import {
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
  FormError,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'
import { useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
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
    <BlogLayout>
      <Toaster
        timeout={2000}
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            margin: '1rem',
            background: 'green',
            color: '#fff',
            zIndex: 1,
          },
          duration: 5000,
          success: {
            duration: 5000,
            theme: {
              primary: 'green',
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
        <Label
          name="name"
          className="block text-gray-700 uppercase text-sm"
          errorClassName="block uppercase text-sm text-red-700"
        >
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          className="border rounded-sm px-2 py-1 outline-none"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="name" className="block text-red-700" />

        <Label
          name="email"
          className="block text-gray-700 uppercase text-sm"
          errorClassName="block uppercase text-sm text-red-700"
        >
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
          }}
          className="border rounded-sm px-2 py-1 outline-none"
          errorClassName="border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="email" className="block text-red-700" />

        <Label
          name="message"
          className="block mt-8 text-gray-700 uppercase text-sm"
          errorClassName="block mt-8 text-red-700 uppercase text-sm"
        >
          Message
        </Label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          className="block border rounded-sm px-2 py-1"
          errorClassName="block border rounded-sm px-2 py-1 border-red-700 outline-none"
        />
        <FieldError name="message" className="block text-red-700" />

        <Submit
          className="block bg-blue-700 text-white mt-8 px-4 py-2 rounded"
          disabled={loading}
        >
          Save
        </Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
