import React from 'react'
import Helmet from '../components/HelmetTitle/Helmet'
import SectionHeader from '../components/sectionHeader/SectionHeader'
import {motion} from 'framer-motion'
import { cartAction } from '../components/redux/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import not_found from '../assets/images/notFound.gif'
import '../assets/styles/Cart.css'
import { Link } from 'react-router-dom'
const Cart = () => {

  const cartItems = useSelector(state=> state.cart.cartItem)
  const totalPrice = useSelector(state=>state.cart.totalAmount)






  return (
    <Helmet title={`Cart`}>
        <SectionHeader title='Shopping Cart'  />

        <section className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 table_container col-md-12 col-sm-12 mb-3">
                {
                  cartItems.length === 0
                  ? 
                  
                  <span className='text-center not_found'>No Products Added ...<img src={not_found} alt="" /> <Link to={'/shop'}>Go To Shop</Link></span>
                  
                  
                  :
                  <table className='table bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems && cartItems.map((item,index)=> {
                          return(
                            <Tr item={item} key={index} />                         
                          )
                        })
                        
                      }

                    </tbody>
                </table>
                }

              </div>
              <div className="col-lg-3 total col-md-12 col-sm-12 mb-3 pt-2">
                {
                  cartItems.length === 0 ? '' :
                  <>
                    <div className="sub_total d-flex justify-content-between">
                      <h6>subtotal</h6>
                      <span>{totalPrice}$</span>
                    </div>
                    <p className='mb-4'>texas and shipping will calculate in checkout</p>
                    <Link className='mt-5' to={'/shop'}>Continue shopping</Link>
                  </>

                }
              </div>
            </div>
          </div>
        </section>
    </Helmet>
  )
}


const Tr = ({item}) => {
  const dispath = useDispatch()
  const deleteProduct = () => {
    dispath(cartAction.deleteItem(item.id))
  }
  return(
    <tr>
    <td><img src={item.imgUrl} alt={item.productName} /></td>
    <td>{item.productName}</td>
    <td>{item.price}$</td>
    <td>{item.quantity}</td>
    <motion.td onClick={deleteProduct} whileTap={{scale:1.1}}><span style={{cursor:'pointer'}}><i class="ri-delete-bin-2-line"></i></span></motion.td>
    </tr>   
  )
}


export default Cart
