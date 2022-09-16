import React from 'react'

const Input = React.forwardRef(({ placeholder }, ref) => {
  return (
    <div>
      <input ref={ref} placeholder={placeholder} />
    </div>
  )
})

export default Input