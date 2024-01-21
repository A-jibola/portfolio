import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProjectCategories from '../Components/ProjectCategories';
import Projectpreview from '../Components/Projectpreview';
import projectsData from '../JsonData/ProjectsData.json';

export default function Projects() {

  const [projects, setProjects] = useState(projectsData.projects)
  const [category, setCategory] = useState('All')

  
  useEffect(()=>{
    if(category !== 'All'){
      setProjects(projectsData.projects.filter(x=> x.category === category))
    }
    else{
      setProjects(projectsData.projects);
    }
  },[category])

  return (
    <Container className='mb-5'>
      <h1 className='mt-5'>All Projects</h1>
      <ProjectCategories setCategories={setCategory}/>
      <Row className='justify-content-between mb-5'>
        {
          projects.map((project, index)=>{
            return(
              <Projectpreview key={index} project={project}/>
            )
          })
        }
      </Row>      
    </Container>
  )
}
