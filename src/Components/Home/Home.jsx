import React from 'react'
import avatar from '../../Images/avatar.svg'


export default function Home() {
  return (
    <>
      <div className='home bg-success text-white min-vh-100 d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className='d-flex flex-column align-items-center justify-content-center'>
            <div className='avatar-img my-4'>
              <img src={avatar} className='w-100' alt="" />
            </div>
            <h1 className='fw-bold d-inline-block'>START FRAMEWORK</h1>
            <div className='d-flex align-items-center gap-3  my-3'>
              <div className='solid-line'></div>
              <i className='fa-solid fa-star'></i>
              <div className='solid-line'></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </div>
    </>
  )
}
