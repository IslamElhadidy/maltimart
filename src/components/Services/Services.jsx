import React from 'react'
import './Services.css'
import serviceData from '../../assets/data/serviceData'
import {motion} from 'framer-motion'
const Services = () => {
  return (
    <section className='services__hero'>
        <div className="container">
            <div className="row">
                {
                    serviceData && serviceData.map((item,index) => {
                        return(
                            <motion.div whileHover={{scale:1.03}} className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                            <div className="services__items d-flex flex-column gap-2" style={{background: `${item.bg}`}}>
                                <span className='truck__icon'><i class={item.icon}></i></span>
                                <div className="items__content">
                                    <h2>{item.title}</h2>
                                    <p>{item.subtitle}</p>
                                </div>
                            </div>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    </section>
  )
}

export default Services