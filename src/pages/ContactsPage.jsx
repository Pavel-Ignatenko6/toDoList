const inputMap = [
  {
    id: 1,
    name: 'Full name',
    type: 'text',
    placeholder: 'Enter your Full name',
    required: true,
  },
  {
    id: 2,
    name: 'Age',
    type: 'number',
    placeholder: 'Enter number from 1 to 99',
    required: true,
    min: 1,
    max: 99,
  },
  {
    id: 3,
    name: 'Email',
    type: 'email',
    placeholder: 'Enter your Email',
    required: true,
  },
]

const radioBtns = ['I love it', `It's allright`, 'Not really', 'Not at all']

export default function ContactsPage() {
  return (
    <div className="contacts-page">
      <h2 className="contacts-text">Please let me know what you like about the app</h2>
      <form className="form-container">
        {inputMap.map(input => {
          return (
            <label key={input.id} className="label-wrapper" htmlFor="input">
              <div className="label-name">{input.name}</div>
              <input
                className="input"
                type={input.type}
                name="input"
                placeholder={input.placeholder}
                min={input.min}
                max={input.max}
                required={input.required}
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
        <button className="submit-btn btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}
