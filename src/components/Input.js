import React from 'react'
import { ErrorMessage, useField } from 'formik'
// forwardRef aracılığıyla üst componentten referans bilgisi gelir
// Custom Input yapılmıştır.
const Input = React.forwardRef(({ placeholder, ...props }, ref) => {
  const [field, meta] = useField(props)
  return (
    <div>
      {/* Üst componentten gelen ref bilgileri input'a yazılır. props bilgileri formik için yazılır */}
      <input ref={ref} placeholder={placeholder} {...field} {...props} autoComplete="off" />
      {/* Kurallara uyulmaz ise error gösterilir */}
      <ErrorMessage name={field.name}/>
    </div>
  )
})

export default Input