import React, { useEffect } from 'react'
import { IoCaretDownCircleOutline, IoCaretUpCircleOutline } from "react-icons/io5";
import Tagger from './Tagger';

export default function Experiencebar({experience}) {

    const buttonClick = e =>{
        var targetId = e.target.id;
        toogleExperience(targetId);
    }

    const toogleExperience = (buttonName)=>{
        if(buttonName === 'buttonDown'+ experience.id){
            document.getElementById(buttonName).classList.add("d-none")
            document.getElementById('content' + experience.id).classList.remove("d-none")
            document.getElementById('buttonUp'+ experience.id).classList.remove("d-none")
        }
        if(buttonName === 'buttonUp' + experience.id){
            document.getElementById(buttonName).classList.add("d-none")
            document.getElementById('content' + experience.id).classList.add("d-none")
            document.getElementById('buttonDown' + experience.id).classList.remove("d-none")
        }
    }

    useEffect(()=>{
        if(experience.active){
            toogleExperience('buttonDown' + experience.id)
        }
    })

    return (
        <div>
            <div className='p-2 mb-2 bg-j-light border rounded d-flex justify-content-between'>
                <span className='px-4'> {experience.company} </span>
                <div> {experience.timeSpent}
                    <span role="button" id={'buttonDown' + experience.id} className='px-4' onClick={buttonClick}> <IoCaretDownCircleOutline onClick={buttonClick} /> </span>
                    <span role="button" id={'buttonUp' + experience.id} className='px-4 d-none' onClick={buttonClick}> <IoCaretUpCircleOutline onClick={buttonClick} /> </span>
                </div>
            </div>
            <div id={'content' + experience.id} className='p-4 d-none mb-4 border rounded'>
                <ul>
                    {experience.keyPoints.map((point, index)=>{
                        return (
                            <li key={index} className='text-start m-1'>{point}</li>
                        )
                    })}    
                </ul>
                <div className='mt-2'>
                {experience.tags.map((tag, index)=>{
                    return (
                        <Tagger key={index} tagTitle={tag} />
                    )
                })}    
                </div>
            </div>
        </div>
  )
}
