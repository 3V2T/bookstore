import React from 'react'
import Form from 'react-bootstrap/Form'

const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="mb-2">
      <Form.Label htmlFor={label} style={{ textTransform: 'capitalize' }}>
        {label}
      </Form.Label>
      <Form.Control
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}

export default FormInput
