import React, { useEffect, useState } from 'react'

export default function Footer() {

  const [isAbout, setIsAbout] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(()=>{
    if(window.location.pathname === '/about'){
        setIsAbout(true)
    }
    if(window.location.pathname !== '/open'){
      setIsOpen(false)
  }
    },[])

  return (
    <>
      {
        isOpen ? "":
        (<div className='footer-margin-top'>
        {
          isAbout ? "" :
          <div  className='border-top border-dark py-5 mx-auto'>
            <h4 className='p-2'> Let's Connect!</h4>
            <a href="https://www.linkedin.com/in/ajibolaokesola/" className='mx-5 btn mb-1 btn-dark'>LinkedIn</a>
            <a href='/about#SendMail' className='mx-5 btn btn-dark'>Send Me A Mail</a> 
          </div>
        }
        <div className='border-top border-dark mt-2'>
            <p className='pt-4'> Created by Ajibola Okesola</p>
            <p>&copy; 2023</p>
        </div>
        </div>)
      }
    </>
  )
}
