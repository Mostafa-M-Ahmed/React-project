import React from 'react'
import { NavLink } from 'react-router-dom'
import error from '../../Images/error.png'


export default function Notfound() {
  return (
    <>
    <div>
    <div className="about  bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <div className="col-lg-6 text-center">
                <img src={error} className='w-100' alt="" />
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className='d-flex flex-column   justify-content-center p-lg-5 py-5'>
                <h1 className='fs-1'>OOPS! PAGE NOT FOUND</h1>
                <p>You must be lost because this URL does not exist</p>
                <button className='btn btn-info px-4 py-1 fs-5'>
                <NavLink className="nav-link fw-bold text-black" to="">Back to Home</NavLink>
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
