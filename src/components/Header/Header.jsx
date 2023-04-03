import React, { useEffect, useRef } from 'react'
import './Header.css'
import logo from '../../assets/images/eco-logo.png'
import user from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Header = () => {
  const navigate = useNavigate();

  const navigateToShop = () => {
    navigate('/cart')
  }

  const MenuRef = useRef(null)
  const menuToggle = () => {
    MenuRef.current.classList.toggle('active_menue')
  }
  const nav__link = [
    {
      path: 'home',
      display : 'Home'
    },
    {
      path: 'shop',
      display : 'Shop'
    },
    {
      path: 'cart',
      display : 'Cart'
    }
  ]


  // Change Header Position at scroll
  const headerRef = useRef(null)

  const stickyHeader = () => {
    window.addEventListener('scroll',() => {
      if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100  ) {
        headerRef.current.classList.add('sticky')
      } else {
        headerRef.current.classList.remove('sticky')
      }
    })
  }

  useEffect(() => {
    stickyHeader()
  })


  const totalQuantity = useSelector(state => state.cart.totalQuantity)




  // Change Header Position at scroll
  
  return (
    <>
        <div className="header" ref={headerRef}>
          <div className="container">
            <div className="row">
              <div className="nav__wrapper d-flex justify-content-between align-items-center">

                <Link to={'/maltimart'} className="logo d-flex gap-2 align-items-center">
                  <img src={logo} alt="logo" />
                  <span>Multimart</span>
                </Link>

                <div className="navigation" ref={MenuRef}  onClick={menuToggle}>
                  <ul className='menu d-flex gap-5 align-items-center' >
                    {
                      nav__link.map((item,index) => {
                        return(
                          <li className='nav__item' key={index}>
                            <Link to= {item.path}>{item.display}</Link>
                          </li>
                        )
                      })  
                    }
                  </ul>
                </div>


                <div className="nav__icons d-flex align-items-center gap-4" >
                  <span style={{cursor:'pointer'}} className='cart__icon' onClick={navigateToShop}>
                    <i class="ri-shopping-bag-line"></i>
                    <span className='badge'>{totalQuantity}</span>
                  </span>
                  <span className='fav__icon'>
                    <i class="ri-heart-line"></i>
                    <span className='badge'>3</span>
                  </span>
                  <span><motion.img whileTap={{scale : 1.1}} src={user} alt="user" /></span>

                  
                <div className="mobile-menue">
                  <span onClick={menuToggle}>
                    <i class="ri-menu-4-line"></i>
                  </span>
                </div>

                </div>



                


              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
