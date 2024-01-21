import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import Tagger from '../Components/Tagger';


export default function ProjectIntro({project}) {
  return (
    <Row>
    <Col lg={6} className='mb-4'>
      <div className='mt-3 mx-auto mb-4'>
        <p className='text-lg-start mb-0 grey-smBold'>{project.category}</p>
        <h1 className='text-lg-start mb-2'>{project.title}</h1>
        <div className='mt-2 mb-5 text-lg-start'>
            {project.tags.map((tag, index)=>{
                return (
                    <Tagger key={index} tagTitle={tag} />
                )
            })}    
            </div>
      </div>
      <div className='text-start mb-2'>
        <p className='fw-bold mb-1'> Problem </p>
        <p>{project.problem}</p>
      </div>
      <div className='text-start mb-2'>
        <p className='fw-bold mb-1'> Solution </p>
        <p>{project.solution}</p>
      </div>
    </Col>
    <Col lg={6}>
    {
      project.links ? 
      (
        <div className='mb-3 mt-5 row'>
          {project.links.map((link, index)=>{
            return (
              <a href={link.link} key={index} className="btn buttonStyle darktoGrey col m-2" target="_blank" rel="noopener noreferrer"> 
              {link.name}</a>
            )
          })}
        </div>
      )
      :""
    }
    <Image className='mw-100 mh-300' src={project.bannerImage} />
    </Col>
  </Row>
  )
}
