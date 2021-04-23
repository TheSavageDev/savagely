import { Submit } from '@redwoodjs/forms'

const SubmitButton = ({ text, disabled }) => {
  return (
    <Submit
      disabled={disabled}
      className="block bg-gold hover:bg-transparent border border-white text-white uppercase text-lg mx-auto p-1 rounded-2xl w-full shadow-2xl"
    >
      {text}
    </Submit>
  )
}

export default SubmitButton
