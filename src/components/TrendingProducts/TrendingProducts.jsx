import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard'
import products from '../../assets/data/products'
const TrendingProducts = () => {

    const [trendingProduct,setTrendingProduct] = useState([])

    useEffect(() => {
        const FilterTrendingProduct = products.filter(item => item.category === 'chair');
        setTrendingProduct(FilterTrendingProduct)

        
    },[])


  return (
    <section>
        <div className="container">
        <h2 className='text-center fw-bold'>Trending Products</h2>
            <div className="row">
                {
                    trendingProduct && trendingProduct.map((item,index) => {
                        return(
                            <ProductsCard key={index} item={item} />
                        )
                    })
                    
                }
            </div>
        </div>
    </section>
  )
}

export default TrendingProducts