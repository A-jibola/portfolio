import React, { useState, useRef } from 'react'
import { Col, Container, Image, Row, Form, Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

export default function About() {

  const form = useRef()
  const [resp, setResp] = useState("")

  const SendFormEmail = () =>{
    emailjs.sendForm(process.env.REACT_APP_MAIL1, process.env.REACT_APP_MAIL2 , form.current, process.env.REACT_APP_MAIL3)
      .then((result) => {
        setResp("Mail Sent Successfully!");
        document.getElementById('resp').classList.add('alert-success');
        document.getElementById('resp').classList.remove('alert-danger', 'd-none');
      }, (error) => {
        setResp('Error:' +error.message);
        document.getElementById('resp').classList.add('alert-danger');
        document.getElementById('resp').classList.remove('alert-success', 'd-none');
      });

      form.current.reset();
  }

  return (
    <Container>
      <h1 className='mt-5 mb-4'>About Me</h1>
      <Row className='mb-5'>
        <Col xs={8} lg={5} className='mx-auto order-lg-2 mb-4'>
          <Image className='mw-100 mh-450' src="me.jpg" rounded />
        </Col>
        <Col xs={10} lg={5} className='text-justify mx-auto order-lg-1 mb-2'>
          <p>
            Hi! My name is <b>Ajibola</b>, I am a Software Engineer and Product Designer. </p><p>I decided that I was going 
            to work in something under the field of computer science when I was 9 years old and I've never looked
            back since then.
          </p>
          <p>I graduated as a multi-award winning student at the top of my programme <i>(Computer Science)</i>, 
          department <i>(Mathematical and Physical Sciences)</i> and College <i>(Sciences)</i>. And, 
          I now work as a Cloud Infrastructure Software Engineer at Microsoft</p>
          <p>More Importantly, I love anime, My favorite Anime of all time is One Piece. And I love reading books.
          I don't do it as much as I should but I also love drawing, writing and going to the gym (I recently
          got my first pull up and it's a pretty big deal to me)</p>
          <p>I love to design and implement efficient and enjoyable solutions, and
           I am always taking steps to improve and learn new things that interest and challenge me. </p>
        </Col>
      </Row>

      <h2 className='mt-5 mb-1'> Send Me a Mail </h2>
      <p className='mb-3'>You can also connect with me on <a href="https://www.linkedin.com/in/ajibolaokesola/" className='text-light'>LinkedIn</a>
      </p>

      <Form ref={form} className='wSizing mx-auto text-center' id="SendMail">

      <div id="resp" className="alert d-none" role="alert"> {resp} </div>

      <Form.Group className="mb-3">
        <Form.Control name="from_name" className='form-bg' type="text" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control name="from_email" className='form-bg' type="email" placeholder="Enter email address" required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control name="message" className='form-bg' placeholder='Please enter your message...' as="textarea" rows={10} required/>
      </Form.Group>

      <Button className="buttonStyle darktoGrey" onClick={SendFormEmail} type="button">
          Send
      </Button>

    </Form>


    </Container>
  )
}
