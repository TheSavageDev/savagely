import { Submit } from '@redwoodjs/forms'

const SubmitButton = ({ text }) => {
  return (
    <Submit className="block bg-gray-200 hover:bg-gray-800 text-gray-800 hover:text-gray-200 uppercase text-lg mx-auto py-1 rounded w-full">
      {text}
    </Submit>
  )
}

export default SubmitButton
