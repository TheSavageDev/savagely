import { Label, SelectField, FieldError } from '@redwoodjs/forms'

const CSS = {
  input: 'flex flex-col mb-5',
  label: 'text-gold font-semibold capitalize text-xl m-0',
  labelError: 'block text-red-500 text-xl capitalize',
  select: 'transition-all rounded-lg text-white bg-green p-2 mx-2',
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
