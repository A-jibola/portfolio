import React from 'react'

export default function ProjectCategories({setCategories}) {
    const filterProjects = e =>{
        var element = document.getElementById('highlightCat');
        if(element){
            element.id = ''
        }
        e.target.id = 'highlightCat'
        setCategories(e.target.textContent)
    }

  return (
    <div className='text-md-start mb-2 text-sm-center'>
        <span role="button" id="highlightCat" className='grey-smBold m-4' onClick={filterProjects}>All</span>
        <span role="button" className='grey-smBold m-4 ' onClick={filterProjects}>Software Engineering</span>
        <span role="button" className='grey-smBold m-4' onClick={filterProjects}>Product Design</span>
    </div>
  )
}
