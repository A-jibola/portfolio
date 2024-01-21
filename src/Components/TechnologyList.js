import React from 'react'

export default function TechnologyList({technologyList}) {
  return (
    <div className='col'>
        <h5 className='fw-bold'>{technologyList.title}</h5>
        <ul>
            {technologyList.items.map((listItem, index)=>{
                return(
                    <li key={index}> {listItem} </li>
                )
            })}
        </ul>  
    </div>
  )
}
