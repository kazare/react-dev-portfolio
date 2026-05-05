import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    const hasNameError = name === '';
    const hasEmailError = email === '';
    const hasMessageError = message === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) return;

    try {
      const response = await fetch('https://formspree.io/f/xkoybwjl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <Box
            ref={form}
            onSubmit={sendEmail}
            component="form"
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                inputProps={{
                  type: 'email',
                }}
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? 'Please enter your email' : ''}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
