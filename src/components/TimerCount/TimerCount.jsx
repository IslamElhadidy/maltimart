import React from 'react'
import counter_img from '../../assets/images/counter-timer-img.png'
import '../../assets/styles/TimerCount.css'
import {motion} from 'framer-motion'
import Clock from './Clock'
import { Link } from 'react-router-dom'
const TimerCount = () => {
  return (
    <>
        <section className='timer'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 col-sm-6 mb-3 d-flex flex-column gap-2">
                        <span>Limited Offers</span>
                        <p>Quality Armchair</p>
                        <Clock/>
                        <motion.button whileTap={{scale: 1.1}}>
                            <Link to={'/shop'}>Vist Store</Link>
                        </motion.button>
                    </div>
                    <div className="col-md-6 col-sm-6  mb-3 text-end">
                        <img src={counter_img} alt="counter_img"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default TimerCount