import './contactForm.scss';

const ContactForm = () => {
  return (
    <div className="contact_form_container">
      <form>
        <div className="input_label">
          <label htmlFor="name">Name*:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="input_label">
          <label htmlFor="email">Email*:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="input_label">
          <label htmlFor="message">Message*:</label>
          <textarea name="message" id="message" required></textarea>
        </div>

        <div className="submit_btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
