import React, { useEffect, useState } from 'react'
import products from '../../assets/data/products'
import PopularCard from './PopularCard'


const Popular = () => {
    const [popular,setPopular] = useState([])

    useEffect(() => {
        const FilterPopular = products.filter(item => item.category === 'watch');
        setPopular(FilterPopular)
    },[])
  return (
    <>
        <section className='best__sales'>
            <div className="container">
            <h2 className='text-center fw-bold pt-5'>Popular Categories</h2>
                <div className="row">
                    {
                        popular && popular.map((item,index) => {
                            return(
                                <PopularCard key={item.id} item={item} />
                            )
                        })
                        
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Popular