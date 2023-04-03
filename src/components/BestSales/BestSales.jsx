import React, { useEffect, useState } from 'react'
import products from '../../assets/data/products'
import BestSalesCard from './BestSalesCard'

const BestSales = () => {
    const [bestSales,setBestSales] = useState([])

    useEffect(() => {
        const FilterBestSales = products.filter(item => item.category === 'sofa');
        setBestSales(FilterBestSales)
    },[])

  return (
    <section className='best__sales'>
        <div className="container">
        <h2 className='text-center fw-bold pt-5'>Best Sales</h2>
            <div className="row">
                {
                    bestSales && bestSales.map((item,index) => {
                        return(
                            <BestSalesCard key={index} item={item} />
                        )
                    })
                    
                }
            </div>
        </div>
    </section>
  )
}

export default BestSales