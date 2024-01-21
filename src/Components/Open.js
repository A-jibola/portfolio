import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { openDoor } from '../ReduxSetUp/store';


export default function Open() {
    const dispatch = useDispatch();

    const moveLeft = () =>{
        document.getElementById("title").classList.add('d-none')
        document.getElementById('leftDoor').classList.add('goLeft')
        document.getElementById('rightDoor').classList.add('goRight')

        setTimeout(()=>{
            document.getElementById("openDoor").style.display = "none";
            dispatch(openDoor())
        }, 2030)
    }

  return (
    <div id="openDoor" className='w-100 m-0 p-0 position-fixed doorpost' onClick={moveLeft}>
        <div id= "title" className='mx-auto w-100 vh-100 door-overlay d-flex justify-content-center flex-column'>
            <h1 className='display-4 fw-semibold'>Ajibola's Portfolio</h1>
            <h5>CLICK TO ENTER</h5>
        </div>
        <Row xs={1} md={2} className='clickGame w-100 vh-100 vw-100 m-0 overLayDoor'>        
            <Col id="leftDoor" className=' p-0 m-0 bg-pp'>
            </Col>
            <Col id='rightDoor' className=' p-0 m-0 bg-pp2'>
            </Col>
        </Row>
    </div>
  )
}
