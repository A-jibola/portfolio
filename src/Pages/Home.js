import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { FaShareAlt } from "react-icons/fa";
import ProjectCategories from '../Components/ProjectCategories';
import projectsData from '../JsonData/ProjectsData.json';
import Projectpreview from '../Components/Projectpreview';

export default function Home() {

  const [projects, setProjects] = useState(projectsData.projects.slice(0,3))
  const [category, setCategory] = useState('All')
  const [colorPick, setColorPick] = useState('bg-pink')

  const addPaintElement = e =>{
    if(e.screenX < window.screen.availWidth - 40){

      let paintball = document.createElement("span")
      paintball.classList.add('color-circle2', colorPick)
      paintball.style.position = 'absolute'
      paintball.style.display = 'inline'

      let navObject = document.getElementById('theNav')
      let navStyle = window.getComputedStyle(navObject);
      let navbarHeight = navObject.offsetHeight + parseInt(navStyle.marginBottom) + parseInt(navStyle.marginTop)
      console.log(navbarHeight)

      paintball.style.left = e.clientX + 'px'
      paintball.style.top = (e.clientY - navbarHeight)+ 'px'
      
      document.getElementById('clickGame').appendChild(paintball)
    }
  }

  const startPaintGame = () =>{

    // change thr cursor to a gun one. see if you can change the pain shape to a splatter

    document.getElementById('clickGame').addEventListener('mouseover', addPaintElement)
  }

  const stopPaintGame = () =>{
    document.getElementById('clickGame').removeEventListener('mouseover', addPaintElement)
  }


  useEffect(()=>{
    if(category !== 'All'){
      setProjects(projectsData.projects.filter(x=> x.category === category).slice(0,3))
    }
    else{
      setProjects(projectsData.projects.slice(0,3));
    }
  },[category])

  return (
    <>
    <div id="clickGame" className='p-5 size mx-auto position-relative' onClick={addPaintElement} onMouseDown={startPaintGame} onMouseUp={stopPaintGame}>
      <div className='my-auto h-100 d-flex justify-content-center flex-column'>
        <h1 className='display-3 fw-semibold unselectable'>Ajibola Okesola</h1>
        <p className='unselectable'>SOFTWARE ENGINEER | PRODUCT DESIGNER</p>
      </div>

        <div className='color-group-popup unselectable'>
          <Card border="secondary" text='light' bg='dark' style={{ width: '13rem' }}>
            <Card.Header className='h6'> Quick Mini-Game!</Card.Header>
            <Card.Body>
              <Card.Text className='h6'>
              <strong>Pick A Color,</strong> And you can draw on this hero section
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
          <div className='d-flex inline color-group px-5'>
            <div role='button' onClick={()=>setColorPick('bg-pink')} className='color-circle me-1 bg-pink'> </div>
            <div role='button' onClick={()=>setColorPick('bg-purple')} className='color-circle me-1 bg-purple'> </div>
            <div role='button' onClick={()=>setColorPick('bg-green')} className='color-circle me-1 bg-green'></div>
            <FaShareAlt className='share-size me-1' />
          </div>

    </div>

    <div className='gradient1'>
      <h2 className='idoWidth p-2 mt-4 mx-auto'>I <span className='emph1'>design</span> and <span className='emph1'>implement</span> accessible and enjoyable solutions</h2>
      <Row className='mt-5 p-5 row justify-content-between w-100'>
        <Col sm={5} className='mb-5'>
          <h4 className='whatIdoSub mb-3'>Software Engineering</h4>
          <p className='lh-3'>Experienced in technical process design, database design, and different kinds of engineering and development: Include cloud infrastructure, front-end and back-end development.</p>
        </Col>
        <Col sm={5} className='mb-5'>
          <h4 className='whatIdoSub mb-3'>Product Design</h4>
          <p className='lh-3'>Experiences in UX research and UI design with an ability to take projects from concept to completion through user empath, competitive audit analysis, wireframing, prototyping, usability testing and more.</p>
        </Col>
      </Row>
    </div>

    <div className='gradient2 mb-2 px-4'>
      <div className='px-2'>
        <h2> Featured Projects </h2>
          <ProjectCategories setCategories={setCategory} />
          <Row className='justify-content-between mb-5 py-3'>
          {
            projects.map((project, index)=>{
              return(
                <Projectpreview key={index} project={project}/>
              )
            })
          }
          </Row>  
      </div>
    
    </div>
    </>
  )
}
