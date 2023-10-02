import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div></div>
        <div className="contact__form">
        <h1>Interested in working with me</h1>
        <form>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="motivation">Motivation</label>
          <input type="text" id="motivation" name="motivation" />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Contact!</button>
        </form>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Contact
