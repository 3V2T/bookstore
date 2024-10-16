import styled from "styled-components"

const RadiosInput = ({ name, value, handleCheck, label, checked }) => {
  return (
    <div className="form-check">
      <input
        name={name}
        className="form-check-input"
        type="radio"
        value={value}
        id={`radio-${value}`}
        onChange={handleCheck}
        checked={checked}
      />
      <label className="form-check-label" htmlFor={`radio-${value}`}>
        {label}
      </label>
    </div>
  )
}
export default RadiosInput

const Wrapper = styled.section`
  
`
