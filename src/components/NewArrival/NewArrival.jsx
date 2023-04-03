import React, { useEffect, useState } from 'react'
import products from '../../assets/data/products'
import MobileCard from './MobileCard'
import WirelessCard from './WirelessCard'
const NewArrival = () => {
    const [mobileProduct,setMobileProduct] = useState([])
    const [wirelessProduct,setWirelessProduct] = useState([])

    useEffect(() => {
        const FilterMobileProduct = products.filter(item => item.category === 'mobile' );
        setMobileProduct(FilterMobileProduct)
    },[])



    useEffect(() => {
        const FilterWirlessProduct = products.filter(item => item.category === 'wireless' );
        setWirelessProduct(FilterWirlessProduct)
    },[])

  return (
    <section>
        <div className="container">
        <h2 className='text-center fw-bold'>New Arrival</h2>
            <div className="row">
                {
                    mobileProduct && mobileProduct.map((item) => {
                        return(
                            <MobileCard key={item.id} item={item} />
                        )
                    })
                    
                }
                {
                    wirelessProduct && wirelessProduct.map((item) => {
                        return(
                            <WirelessCard key={item.id} item={item} />
                        )
                    })
                    
                }
            </div>
            
        </div>
    </section>
  )
}

export default NewArrival