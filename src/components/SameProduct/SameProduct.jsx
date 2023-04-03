import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import products from '../../assets/data/products'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'

 const SameProduct = () => {

    const {id} = useParams()
    const product = products.find(item => item.id === id)
    const {category} = product
    const realatedProducts = products.filter(item => item.category === category)
    // console.log(realatedProducts);

    const dispath = useDispatch()
    const addToCart = (item) => {
        dispath(cartAction.addItem({
            id: item.id,
            productName:item.productName,
            price:item.price,
            image:item.imgUrl
        }))
        toast.success('Product added success')
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[product])
    
  return (

    <>
    {
        realatedProducts && realatedProducts.map((item) => {
            return (
                <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={item.id}>
                    <div className="product__item d-flex gap-2 flex-column">
                        <Link to={`/shop/${item.id}`}><img src={item.imgUrl} alt="" /></Link>
                        <h5 className='pointer-event'><Link to={`/shop/${item.id}`}>{item.productName}</Link></h5>
                        <span>{item.category}</span>
                        <div className='d-flex justify-content-between product__price'>
                            <span className='price'>{item.price}$</span>
                            <motion.button whileTap={{scale:1.2}} onClick={addToCart}>+</motion.button>
                        </div>
                    </div>
                </div>
            )
        })
    }


    </>
  )
}

export default SameProduct