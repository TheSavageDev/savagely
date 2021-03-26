import { Label, SelectField, FieldError } from '@redwoodjs/forms'

const CSS = {
  input: 'flex flex-col mb-5',
  label: 'text-gray-200 capitalize text-lg m-0',
  labelError: 'block text-red-500 text-xl capitalize',
  select: 'transition-all rounded-lg text-gray-200 bg-gray-800 p-2 mx-2',
  fieldErrorText: 'block text-red-500 capitalize',
}

const Select = ({ title, name, options = [] }) => {
  return (
    <article className={CSS.input}>
      <Label className={CSS.label}>{title}</Label>
      <SelectField
        name={name}
        className={CSS.select}
        errorClassName={CSS.selectFieldError}
        validation={{ required: true }}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </SelectField>
      <FieldError name={name} className={CSS.fieldErrorText} />
    </article>
  )
}

export default Select
