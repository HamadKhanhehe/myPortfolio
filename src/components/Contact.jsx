  

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ap18oup', 'template_5mewrxp', form.current, {
        publicKey: 'g-Gwt_YXghh3pg81C',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className='relative top-80 h-[500px] text-red ' >
        <div className='text-3xl pl-12 text-red font-bold'>
            <h1>Contact Me.</h1>
        </div>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col p-5'>
{/* react boostrap form */}
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="from_name" placeholder="Enter name" className='bg-white opacity-[0.8]' />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='from_email' className='bg-white opacity-[0.8]' />
        <Form.Label>Message</Form.Label>
      <Form.Control  as="textarea"
            rows={3}
             name="message"
             placeholder="what you wanna say"
             className='bg-white opacity-[0.8]'
              />
      </Form.Group>
      <Button className='border-red hover:bg-red hover:border-red' type="submit">
        Submit
      </Button>

    </form>


    </section>
  );
};