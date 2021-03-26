import { Label, CheckboxField } from '@redwoodjs/forms'

const CSS = {
  checkbox: 'flex items-center',
  label: 'capitalize text-lg text-gray-200 pl-2',
}
const Checkbox = ({ name }) => {
  return (
    <article className={CSS.checkbox}>
      <CheckboxField name={name} />
      <Label name={name} className={CSS.label} />
    </article>
  )
}
export default Checkbox
