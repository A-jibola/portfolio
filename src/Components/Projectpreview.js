import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Tagger from './Tagger';

export default function Projectpreview({project}) {

  const [linkTag, setLinkTag] = useState("");
  const setTag = () => {
    if(project.category === "Software Engineering"){
      setLinkTag("swe/")
    }
    if(project.category === "Product Design"){
      setLinkTag("ux/")
    }
  }
  
  useEffect(()=>{
    setTag();
  })

  return (
    <Col xs={6} md={4} lg={3} className='mb-5 border-dark'>
      <a href={'/project/'+ linkTag + project.id} className='text-decoration-none'>
        <Card>
          <Card.Img variant="top" src={project.bannerImage} />
          <Card.Body className='bg-trans-light'>
            <Card.Title className='text-white'>{project.title}</Card.Title>
            {project.description? 
              <Card.Text className='text-white small'>
                {project.description}
              </Card.Text>
              : ''}

              {project.tags.map((tag, index)=>{
              return (
                <span className='ov-no'><Tagger key={index} tagTitle={tag} /></span>
              )
            })}

          </Card.Body>
        </Card>
      </a>
    </Col>
  )
}
