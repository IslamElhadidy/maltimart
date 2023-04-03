import React from 'react'
import Helmet from '../components/HelmetTitle/Helmet'
import SectionHeader from '../components/sectionHeader/SectionHeader'
import products from '../assets/data/products'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../assets/styles/ProductDetails.css'
import { useDispatch } from 'react-redux'
import { cartAction } from '../components/redux/slices/CartSlice'
import { toast } from 'react-toastify'
import BasicTabs from '../components/Tabs/Tabs'
import SameProduct from '../components/SameProduct/SameProduct'


function ProductDetails() {
  const {id} = useParams()
  const product = products.find(item => item.id === id)

  // const realatedProducts = products.filter(item => item.category === product.category)


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

  return (
    <Helmet title={'ProductDetails'}>
        <SectionHeader title={product.productName} />

        <section className='product_detail'>
          <div className="container">
            <div className="row d-flex align-items-center ">
              <div className="col-md-6 col-sm-12 mb-3">
                <img src={product.imgUrl} alt="" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <div className="product_content d-flex flex-column gap-3 ">
                  <h4>{product.productName}</h4>
                  <div className="rating d-flex gap-5">
                    <span className='d-flex gap-1'>(<p>{product.avgRating} </p> rating)</span>
                    <div className="stars_rating d-flex gap-1">
                      <i class="ri-star-line"></i>
                      <i class="ri-star-line"></i>
                      <i class="ri-star-line"></i>
                      <i class="ri-star-line"></i>
                      <i class="ri-star-half-line"></i>
                    </div>
                  </div>
                  <div className="price_category d-flex gap-5">
                    <h5>{product.price}$</h5>
                    <span className='d-flex gap-2'>category: <p>{product.category}</p></span>
                  </div>
                  <p>{product.shortDesc}</p>

                  <motion.button whileTap={{scale:1.2}} style={{width:'fit-content'}} onClick={addToCart}>Add To Cart</motion.button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='tabs'>
          <div className="container">
            <BasicTabs product={product} />
          </div>


        </section>


        <section className='related'>
          <div className="container">
            <p>Related products</p>
            <div className="row">
              <SameProduct />
            </div>
          </div>
        </section>


    </Helmet>
  )
}

export default ProductDetails
