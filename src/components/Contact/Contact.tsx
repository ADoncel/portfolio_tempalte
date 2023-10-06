import { useState } from "react";

import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState<string>("");
  const [characterCount, setCharacterCount] = useState<number>(0);

  const handleMessageChange = (
    // eslint-disable-next-line prettier/prettier
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setMessage(value);
    setCharacterCount(value.length);
  };

  return (
    <>
      <div className="contact">
        <div />
        <div className="contact__form">
          <h1>
            Interested?{" "}
            <u style={{ color: "#ff7e55", textDecorationColor: "#FFF" }}>
              Contact me
            </u>
            !
          </h1>
          <form>
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="given-name"
              required
            />

            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" autoComplete="tel" />

            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              required
            />

            <label htmlFor="motivation">Motivation</label>
            <input type="text" id="motivation" name="motivation" />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              maxLength={300}
              value={message}
              onChange={handleMessageChange}
              required
            />
            <div className="contact__form__charcount">{characterCount}/300</div>

            <button type="submit">Contact!</button>
          </form>
        </div>
        <div />
      </div>
    </>
  );
};

export default Contact;
