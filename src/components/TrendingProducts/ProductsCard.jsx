import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/styles/ProductCard.css'
import {motion} from 'framer-motion'
import { useDispatch } from 'react-redux'
import { cartAction } from '../redux/slices/CartSlice'
import { toast } from 'react-toastify'
const ProductsCard = ({item}) => {

    const dispath = useDispatch()
    const addToCart = () => {
        dispath(cartAction.addItem({
            id: item.id,
            productName:item.productName,
            price:item.price,
            image:item.imgUrl
        }))
        toast.success('Product added success')
    }
  return (

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
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
}

export default ProductsCard