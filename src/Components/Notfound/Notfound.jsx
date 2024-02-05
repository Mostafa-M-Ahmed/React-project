import React from 'react'
import notfound from '../../Images/notfound.png'
import { Link, NavLink } from 'react-router-dom'
import error from '../../Images/error.png'


export default function Notfound() {
  return (
    <>
    <div>

    {/* <img src={notfound} className='w-100' alt="" /> */}
    <div className="about  bg-dark text-white min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row">
              <div className="col-lg-6 text-center">
                <img src={error} className='w-100' alt="" />
              </div>
              <hr className='d-lg-none' />
              <div className="col-lg-6">
                <h1>OOPS! PAGE NOT FOUND</h1>
                <p>You must be lost because this URL does not exist</p>
                <button className='btn btn-info px-4 py-1 fw-bold'>
                <NavLink className="nav-link fw-bold rounded px-2" to="">Back to Home</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
