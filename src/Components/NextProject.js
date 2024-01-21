import React from 'react'
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";


export default function NextProject({nextProject, callNextProject}) {

    const navigate = useNavigate();

    const SetNextProject = () =>{
        navigate('/project/' + nextProject.tag +nextProject.id);
        callNextProject();
    }

    return (
    <div className='buttonStyle p-4 next-project'>
        <p role='button' className='mb-3 grey-smBold fw-bolder mx-auto toLight' onClick={SetNextProject}>
            Next Project
        <HiArrowRight className='mx-2'/>
        </p>
        <h5> {nextProject.name} </h5>
    </div>
    )
}
