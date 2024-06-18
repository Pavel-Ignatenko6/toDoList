import { useState } from 'react'

const inputMap = [
  {
    id: 1,
    name: 'Full name',
    type: 'text',
    placeholder: 'Enter your Full name',
    errorMessage: 'Please enter at least 4 characters',
  },
  {
    id: 2,
    name: 'Age',
    type: 'number',
    placeholder: 'Enter number from 1 to 99',
    errorMessage: 'Please enter a number between 1 and 99',
  },
  {
    id: 3,
    name: 'Email',
    type: 'email',
    placeholder: 'Enter your Email',
    errorMessage: 'Please enter a valid email address',
  },
]

const radioBtns = ['I love it', `It's allright`, 'Not really', 'Not at all']

export default function ContactsPage() {
  // set state with erros object
  const [errors, setErrors] = useState({
    'Full name': false,
    Age: false,
    Email: false,
  })

  const [inputsValues, setInputsValues] = useState({
    'Full name': '',
    Age: '',
    Email: '',
  })

  const [radioValue, setRadioValue] = useState('')
  const [failedToSubmit, setFailedToSubmit] = useState(null)
  const [textAreaValue, setTextAreaValue] = useState('')
  
  // validation func v
  const handleValidation = e => {
    const { name, value } = e.target
    setErrors({
      ...errors,
      [name]: false,
    })
    if (value.length < 4 && name !== 'Age') {
      setErrors({
        ...errors,
        [name]: true,
      })
    }
    if ((name === 'Age' && value < 1) || value > 99) {
      setErrors({
        ...errors,
        [name]: true,
      })
    }
    setInputsValues({
      ...inputsValues,
      [name]: value,
    })
  }

  // submit func
  const handleSubmit = e => {
    e.preventDefault()
    if (errors['Full name'] || errors.Age || errors.Email || radioValue === '' || textAreaValue === '') {
      setFailedToSubmit(true)
      return false
    } else {
      setFailedToSubmit(false)
      setTextAreaValue('')
      setRadioValue('')
      setInputsValues({
        'Full name': '',
        Age: '',
        Email: '',
      })
    }
  }

  return (
    <div className="contacts-page">
      <h2 className="contacts-text">Please let me know what you like about the app</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        {inputMap.map(input => {
          return (
            <div key={input.id} className="input-wrapper">
              <label className="label-wrapper" htmlFor={input.name}>
                <div className="label-name">{input.name}</div>
                <input
                  className={`input ${errors[input.name] ? 'input-error' : ''}`}
                  value={inputsValues[input.name]}
                  onChange={(e) => handleValidation(e)}
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                />
              </label>
              <div className="inputs-alert">{errors[input.name] && <p>{input.errorMessage}</p>}</div>
            </div>
          )
        })}
        {<div className="error"></div>}
        <div className="form-radio">
          <span className="form-question">Do you enjoy the app?</span>
          {radioBtns.map((radioBtn, index) => {
            return (
              <label key={index} className="radio-wrapper" htmlFor="radioBtn">
                <input className="radio-btn" type="radio" name="radioBtn" checked={radioValue === radioBtn} value={radioBtn} onChange={e => setRadioValue(e.target.value)}  />
                <div className="radio-name">{radioBtn}</div>
              </label>
            )
          })}
          {failedToSubmit && radioValue === '' && <div className="radio-alert">Please choose an option</div>}
        </div>
        <div className="review-container">
          <span>Please let me know what I should add or fix</span>
          <textarea
            className="review-field"
            name="review"
            placeholder="Enter your review here"
            onChange={e => setTextAreaValue(e.target.value)}
            value={textAreaValue}
          ></textarea>
          {failedToSubmit && textAreaValue.length < 30 && <div className="radio-alert">Please type at least 30 characters</div>}
        </div>
        <button className="submit-btn btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
