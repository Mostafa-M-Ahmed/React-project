import React from 'react'
import pic1 from '../../Images/port1.png'
import pic2 from '../../Images/port2.png'
import pic3 from '../../Images/port3.png'

export default function Portfolio() {

  function display(img) {
    let x = document.getElementById('modalBTN');
    let y = document.getElementById('modalID');
    y.setAttribute('src', img)
    x.click()
  }

  return (
    <>

      <div>
        <button id='modalBTN' type="button" class="d-none" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-">
              <div class="modal-body">
                <img id='modalID' className='w-100 rounded' alt="" />

              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='portfolio bg-body-tertiary min-vh-100 text-center d-flex justify-content-center align-items-center'>
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center py-3">
            <h1 className='fw-bold mt-5'>PORTFOLIO COMPONENT</h1>
            <div className='d-flex align-items-center gap-3'>
              <div className='solid-line-black'></div>
              <i className='fa-solid fa-star my-3'></i>
              <div className='solid-line-black'></div>
            </div>
          </div>
          {/* row-cols-lg-6 */}
          <div className="row" id="Roww">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic1} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic1)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic2} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic2)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic3} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic3)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic1} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic1)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic2} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic2)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="position-relative">
                <img src={pic3} className='w-100 rounded' alt="" />
                <div onClick={() => display(pic3)} className='test rounded position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center bg-success'>
                  <i className='fa-solid fa-plus text-white fa-6x'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
