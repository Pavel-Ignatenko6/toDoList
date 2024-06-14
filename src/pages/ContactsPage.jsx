import { useState } from 'react'

const inputs = ['Full name', 'Age', 'Email']
const radioBtns = ['I love it', `It's allright`, 'Not really', 'Not at all']

const setPlaceholder = index => {
  if (index === 1) {
    return 'Enter number from 1 to 99'
  }
  return `Enter your ${inputs[index]}`
}

const setInputType = index => {
  if (index === 0) {
    return 'text'
  } else if (index === 1) {
    return 'number'
  } else if (index === 2) {
    return 'email'
  }
}

export default function ContactsPage() {
  // const [inputValue, setInputValue] = useState('')
  // const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = e => {
    e.preventDefault()
    console.log('form submitted')
  }

  return (
    <div className="contacts-page">
      <h2 className="contacts-text">Please let me know what you like about the app</h2>
      <form className="form-container" onSubmit={submitForm}>
        {inputs.map((input, index) => {
          return (
            <label key={index} className="label-wrapper" htmlFor="input">
              <div className="label-name">{input}</div>
              <input
                className="input"
                type={setInputType(index)}
                name="input"
                placeholder={setPlaceholder(index)}
                min={index === 1 ? 1 : undefined}
                max={index === 1 ? 99 : undefined}
                required
              />
            </label>
          )
        })}
        <div className="form-radio">
          <span className="form-question">Do you enjoy the app?</span>
          {radioBtns.map((radioBtn, index) => {
            return (
              <label key={index} className="radio-wrapper" htmlFor="radioBtn">
                <input className="radio-btn" type="radio" name="radioBtn" required />
                <div className="radio-name">{radioBtn}</div>
              </label>
            )
          })}
        </div>
        <div className="review-container">
          <span>Please let me know what I should add or fix</span>
          <textarea className="review-field" name="review" placeholder="Enter your review here" required></textarea>
        </div>
        <button className="submit-btn btn" type="submit" >
          Submit
        </button>
      </form>
    </div>
  )
}
