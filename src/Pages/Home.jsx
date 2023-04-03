import React from 'react'
import hero_img from '../assets/images/hero-img.png'
import '../assets/styles/home.css'
import Helmet from '../components/HelmetTitle/Helmet'
import {motion} from 'framer-motion'
import Services from '../components/Services/Services'
import TrendingProducts from '../components/TrendingProducts/TrendingProducts'
import BestSales from '../components/BestSales/BestSales'
import TimerCount from '../components/TimerCount/TimerCount'
import NewArrival from '../components/NewArrival/NewArrival'
import Popular from '../components/Popular/Popular'
import { Link } from 'react-router-dom'

function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <Helmet title={'Home'}>
        
        <section className='hero__section'>
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-md-5 col-sm-12">
                <div className="hero_content d-flex gap-4 flex-column">
                    <h6>Trending product in {year}</h6>
                    <h1>Make Your Interior More Minimalistic & Modern</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis aliquam quam dolore illum quas pariatur deleniti quo modi laudantium dolor.</p>
                    <Link to={'/shop'}>
                      <motion.button whileTap={{scale: 1.1}} className='btn_hero'>SHOP NOW</motion.button>
                    </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-5 col-sm-12">
                <div className="hero_img">
                  <img src={hero_img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <TrendingProducts/>
        <BestSales />
        <TimerCount />
        <NewArrival />
        <Popular />
      </Helmet>
    </>
  )
}

export default Home
