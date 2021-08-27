import { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/loader';

import './contactForm.scss';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setError('');

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setSuccess(false);

    const data_to_send = {
      name,
      email,
      message,
    };

    try {
      await axios.post(
        'https://truncated.herokuapp.com/api/portfolio/response',
        data_to_send
      );

      // console.log('Succes', res);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      console.log('error', err.response);
      setLoading(false);

      const { status } = err.response;
      if (status === 301) {
        setError(err.response.data.message);
      } else {
        setError('Something went wrong please try again later.');
      }
      setSuccess(false);

      // setError()
    }

    // console.log('values', name, email, message);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact_form_container">
      {error && <div className="err_msg">{error}</div>}

      {success && <div className="success_msg">Message sent successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div className="input_label">
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="email">Email*:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input_label">
          <label htmlFor="message">Message*:</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="submit_btn">
          {loading ? (
            <button className="not-allowed">
              <Loader />
            </button>
          ) : (
            <button>Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
