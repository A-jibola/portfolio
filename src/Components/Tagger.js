import React from 'react'
import Badge from 'react-bootstrap/Badge';


export default function Tagger({tagTitle}) {
  return (
    <Badge pill bg="light" text="dark" className='p-2 m-1 tagger-style'> {tagTitle} </Badge>
  )
}
