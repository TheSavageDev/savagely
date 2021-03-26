import {
  FieldError,
  Label,
  TextField,
  TextAreaField,
  DateField,
} from '@redwoodjs/forms'

const CSS = {
  inputField: 'flex flex-col my-2',
  label: 'text-gray-200 capitalize text-lg',
  labelError: 'block text-red-500 text-xl capitalize',
  input: 'transition-all rounded-lg text-gray-200 bg-gray-800 p-2 mx-2',
  fieldErrorText: 'block text-red-500 capitalize',
}

const InputField = ({ name, type, required }) => {
  return (
    <article className={CSS.inputField}>
      <Label
        name={name}
        className={CSS.label}
        errorClassName={CSS.labelError}
      />
      {type === 'text' ? (
        <TextField
          name={name}
          validation={{ required }}
          className={CSS.input}
          errorClassName={CSS.fieldError}
        />
      ) : type === 'area' ? (
        <TextAreaField
          name={name}
          validation={{ required }}
          className={CSS.input}
        />
      ) : type === 'date' ? (
        <DateField
          name={name}
          validation={{ required }}
          className={CSS.input}
          errorClassName={CSS.fieldError}
        />
      ) : (
        <TextField
          name={name}
          validation={{ required }}
          className={CSS.input}
          errorClassName={CSS.fieldError}
          transformValue={(str) => parseFloat(str.replace(/,/g, ''), 10)}
        />
      )}
      <FieldError name={name} className={CSS.fieldErrorText} />
    </article>
  )
}

export default InputField
