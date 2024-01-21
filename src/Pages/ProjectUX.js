import React, { useEffect, useState } from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import projectsData from '../JsonData/ProjectsData.json'
import NextProject from '../Components/NextProject';
import ProjectIntro from '../Components/ProjectIntro';

export default function ProjectUX() {

  let { projectID } = useParams();
  const [project, setProject] = useState(projectsData.projects.find(x=> x.id.toString() === projectID))
  const [nextProject, setNextProject] = useState({name: '', id: '', tag:''})

  const callNextProject = () => {
    var randomNumber = Math.floor(Math.random() * projectsData.projects.length);
    var randomProject = projectsData.projects[randomNumber]
    var linkTag = ""
    if(randomProject.category === "Software Engineering"){
      linkTag = "swe/"
    }
    if(randomProject.category === "Product Design"){
      linkTag = "ux/"
    }
    setNextProject({name: randomProject.title, id: randomProject.id, tag:linkTag})
}

  useEffect(()=> {
    setProject(projectsData.projects.find(x=> x.id.toString() === projectID))
    callNextProject()
  },[projectID])

  return (
    <Container>
      <ProjectIntro project={project} />

      <div className='text-start mt-5'>
        <h2>User Research</h2>
        <h4>Summary:</h4>
        <p> {project.UserReseachSummary} </p>

        {
          project.painPoints?(
            <Row className='my-4'>
            { project.painPoints.map((pain, index)=>{
            return(
              <Col className='mb-2'>
                <div className='green-circle bg-danger mb-2 mx-auto'>{index + 1}</div>
                <p>{pain}</p>
              </Col>
            )
            })}
        </Row> ): ""
        }

        <h4 className='mt-3'> User Persona:</h4>
        {
          project.userPersonas.map((persona, index)=>{
            return(
              <img key={index} src={'/Images/'+persona}  className='w-100 mb-2' alt='User Persona'/>
            )
          })
        }

        <h4 className='mt-5'> User Journey Map:</h4>
        {
          project.userJourneyMaps.map((journeyMap, index)=>{
            return(
              <img key={index} src={'/Images/'+journeyMap}  className='w-100' alt='User Journey Map'/>
            )
          })
        }

        <h4 className='mt-3'> Competitive Audit Analysis:</h4>
        <p>{project.competitiveAudit.intro}</p>
        <img src={'/Images/'+project.competitiveAudit.image}  className='w-100 my-4' alt='Competitive Audit'/>

      </div>

      <div className='mt-4 text-start'>
        <h3>Paper Wireframes</h3>
        <img src={'/Images/'+project.paperWireframes}  className='w-100 my-4' alt='Paper Wireframes'/>
      </div>

      
      <div className='mt-4 text-start'>
        <h3>Low Fidelity Wireframes</h3>
        <p>The Paper wireframes were then analyzed, and the best features from the sketching and ideation process were complied to create the low-fidelity digital wireframes</p>
        {
          project.lowFi.map((lowfi, index)=>{
            return(
              <img key={index} src={'/Images/'+lowfi}  className='w-100 my-4' alt='Low Fidelity Wireframes'/>
            )
          })
        }
      </div>

      <div className='mt-4 text-start'>
        <h3>Design System</h3>
        <p>{project.designSystem.intro}</p>
        <img src={'/Images/'+project.designSystem.image}  className='w-100 my-4' alt='Design System'/>
      </div>

      <div className='mt-4 text-start'>
        <h3>Usabilitity Study</h3>
        <p>The design system and wireframes were used to create the first iterations of the High Fidelity Wireframes which were then further worked upon. A moderated usability study was then conducted with both in-person and remote participants.</p>
        <Row xs={2} md={project.usabilityInsights.length} className='my-4'>
          { project.usabilityInsights.map((insights, index)=>{
            return(
              <Col className='mb-2'>
                <div className='green-circle mx-auto'>{index + 1}</div>
                <p>{insights}</p>
              </Col>
            )
          })}
        </Row>
        {
          project.designChanges.map((changes, index)=>{
            return(
              <img key={index} src={'/Images/'+changes}  className='w-100 my-4' alt='Design Changes'/>
            )
          })
        }
      </div>

      <div className='mt-4 text-start'>
        <h3>High Fidelity Wireframes</h3>
        <p>The result of the entire process let to a successful completion of a beautiful and well rounded design</p>
        {
          project.hiFI.map((hifi, index)=>{
            return(
              <img key={index} src={'/Images/'+hifi}  className='w-100 my-4' alt='High Fidelity Wireframes'/>
            )
          })
        }
      </div>

      <div className='text-start mt-3'>
        <h3>What I Learned</h3>
        <ol>
          {project.notes.map((note, index)=>{
            return(
              <li key={index}> {note} </li>
          )})}
        </ol>
      </div>
      <NextProject nextProject={nextProject} callNextProject={callNextProject} />
    </Container>

  )
}
