import React, { useEffect, useState } from 'react'
import {Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import projectsData from '../JsonData/ProjectsData.json'
import NextProject from '../Components/NextProject';
import TechnologyList from '../Components/TechnologyList';
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
      { project.features?
        <div className='text-start mb-5'>
        <h3> Features: </h3>
        {project.features.map((feature, index)=>{
                return(
                    <li key={index}> {feature} </li>
                )
            })}
      </div>: ""
      }
      
      { project.process?
        <div className='text-start mb-3'>
        <h3> Process: </h3>
        <p>{project.process.intro}</p>
        <img src={'/Images/'+project.process.descriptiveImage}  className='w-100 my-4' alt='processImage'/>
      </div>: ""
      }
      <div className='text-start mb-4'>
        <h3>Technologies Used: </h3>
        <div xs={1} md={2}>
        { project.technologylist? 
            project.technologylist.map((list, index)=>{
              return (
                <TechnologyList key={index} technologyList={list} />
              )
            }) :"" }
        </div> 
      </div>
      { project.images?
        <div className=' mb-5'>
        {project.images.map((image, index)=>{
                return(
                    <img key={index} src={image} alt="Project Features" className='image-width px-1 py-1' />
                )
            })}
        </div>: ""
      }
      <div className='text-start mb-3'>
        <h3>Some Notes</h3>
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
