import React from 'react'
import '../assets/styles/Error.css'
import { Link } from 'react-router-dom'
import Helmet from '../components/HelmetTitle/Helmet'
const Error = () => {
  return (
    <Helmet title={`Error`}>
        <div className="error">
            <div className="container">
                <div className="all-info">
                    <div className="f1-row">
                        4
                        <span></span>
                        4
                    </div>
                    <div className="s1-row">
                        <h4>The Page you were looking for, couldn't be found.</h4>
                    </div>
                    <div className="t1-row">
                        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                    </div>
                    <div className="buttons">
                        <Link to="/home" className='back button'>Go Home</Link>
                    </div>
                </div>
            
            </div>
        </div>
    </Helmet>
  )
}

export default Error