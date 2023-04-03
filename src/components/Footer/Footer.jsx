import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <section className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex flex-column gap-3">
              <h6>Multimart</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex flex-column gap-3">
              <h6>Top Categories</h6>
              <div className='d-flex flex-column gap-2'>
                <span><Link to={'/shop'}>Mobile Phone</Link></span>
                <span><Link to={'/shop'}>Modern Sofa</Link></span>
                <span><Link to={'/shop'}>Arm Chair</Link></span>
                <span><Link to={'/shop'}>Smart Watches</Link></span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex flex-column gap-3">
              <h6>Useful Links</h6>
              <div className='d-flex flex-column gap-2'>
                <span><Link to={'/shop'}>Shop</Link></span>
                <span><Link to={'/cart'}>Cart</Link></span>
                <span>Privacy Policy</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 d-flex flex-column gap-3">
            <h6>Contact</h6>
              <div className='d-flex flex-column gap-2'>
                <div className='d-flex gap-2 align-items-center'>
                  <i class="ri-map-pin-line"></i>
                  <span className='address'>Mansoura Qism2, Mansoura, Dakhalia</span>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <i class="ri-phone-fill"></i>
                  <span className='phone'><a href='https://api.whatsapp.com/send?phone=201060088542' target='_blank' rel='noreferrer'>+20 1060088542</a></span>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                  <i class="ri-mail-send-line"></i>
                  <span className='gmail'><a href="mailto:elhadidii624@gmail.com" target="_blank" rel="noreferrer">elhadidii624@gmail.com</a></span>
                </div>
              </div>
            </div>
          </div>
          <p className='text-center pt-3'>copywrite 2023 developed by <a href="https://www.facebook.com/El7aDiiDy"target="_blank" rel="noreferrer">Eslam Elhadidy  </a>, All right reserved.</p>
        </div>
      </section>
    </>
  )
}

export default Footer
