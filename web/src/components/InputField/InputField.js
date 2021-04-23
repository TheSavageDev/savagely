import {
  FieldError,
  Label,
  TextField,
  TextAreaField,
  DateField,
} from '@redwoodjs/forms'

const CSS = {
  inputField: 'flex flex-col my-2',
  label: 'text-gold capitalize text-2xl font-bold',
  labelError: 'text-red-500 capitalize text-2xl font-bold',
  input: 'transition-all rounded-2xl text-black bg-white p-2 mx-2 shadow-inner',
  fieldErrorText: 'block text-red capitalize',
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
