import React from 'react'
import './SectionHeader.css'
const SectionHeader = ({title}) => {
  return (
    <>
        <section className='section__header'>
            <div className="container">
                <h1 className='text-center'>{title}</h1>
            </div>
        </section>
    </>
  )
}

export default SectionHeader