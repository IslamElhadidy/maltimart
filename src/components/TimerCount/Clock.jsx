import React, { useEffect, useState } from 'react'
import '../../assets/styles/Clock.css'

const Clock = () => {
    const [days , setDays] = useState()
    const [hours , setHours] = useState()
    const [min , setMin] = useState()
    const [sec , setSec] = useState()

    const countDown = () => {
        const destination = new Date('Mar 29, 2023')
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const diff = now - destination

            const days = Math.floor(diff / (1000*60*60*24))
            const hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60))
            const min = Math.floor(diff % (1000*60*60) / (1000*60))
            const sec = Math.floor(diff % (1000*60) / (1000))

            if(destination < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days)
                setHours(hours)
                setMin(min)
                setSec(sec)
            }
        })
    }

    useEffect(() => {
        countDown()
    },[])
  return (
    <>
      <div className="clock d-flex align-items-center gap-md-3 gap-1">

        <div className="clock__date d-flex align-items-center gap-3">
            <div className="days d-flex flex-column align-items-center">
                <span className='fs-2'>{days}</span>
                <p>Days</p>
            </div>
            <span>:</span>
        </div>

        <div className="clock__date d-flex align-items-center gap-3">
            <div className="days d-flex flex-column align-items-center">
                <span className='fs-2'>{hours}</span>
                <p>Hours</p>
            </div>
            <span>:</span>
        </div>

        <div className="clock__date d-flex align-items-center gap-3">
            <div className="days d-flex flex-column align-items-center">
                <span className='fs-2'>{min}</span>
                <p>Minutes</p>
            </div>
            <span>:</span>
        </div>

        <div className="clock__date d-flex align-items-center gap-3">
            <div className="days d-flex flex-column align-items-center">
                <span className='fs-2'>{sec}</span>
                <p>Seconds</p>
            </div>
        </div>

      </div>
    </>
  )
}

export default Clock
