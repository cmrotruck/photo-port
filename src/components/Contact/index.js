import React from "react";

function ContactForm() {
  // JSX
  return (
    <section>
      <hi>Contact Me</hi>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea type="text" name="message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
