import React, {useState} from 'react'
import { Container, Modal, Button } from 'react-bootstrap'
import ExperiencesData from '../JsonData/ExperienceData.json'
import ExperienceBar from '../Components/Experiencebar'

export default function Experience() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container className='mb-5'>
      <div className='mt-5 wSizing mx-auto mb-4'>
      <p className='text-lg-start mb-0 grey-smBold'>SHORT SUMMARY OF MY</p>
      <h1 className='text-lg-start'>PROFESSIONAL EXPERIENCE</h1>
      </div>
      <div className='wSizing mx-auto'>
      {
          ExperiencesData.experiences.map((experience, index)=>{
            return(
              <ExperienceBar key={index} experience={experience}/>
            )
          })
      }

      <div className='text-end mt-4'>
        <button className='btn btn-dark'  onClick={handleShow}> View My Full Resume </button>

        <Modal show={show} onHide={handleClose} className='modalStyle' centered>
          <Modal.Title className='pt-4'>My Resume opens in another tab</Modal.Title>
          <Modal.Body>Are you okay with that?</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}> Go Back </Button>
            <a href="/Resume-SWE.pdf" target="_blank" className='btn btn-secondary' onClick={handleClose}>
              Yes, Sure!
            </a>
          </Modal.Footer>
      </Modal>
      </div>
      </div>
    </Container>
  )
}
