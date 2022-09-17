import React from 'react'
import { ErrorMessage, useField } from 'formik'

const Input = React.forwardRef(({ placeholder, ...props }, ref) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <input ref={ref} placeholder={placeholder} {...field} {...props} autoComplete="off" />
      <ErrorMessage name={field.name}/>
    </div>
  )
})

export default Input