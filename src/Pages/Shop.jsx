import React, {  useState } from 'react'
import Helmet from '../components/HelmetTitle/Helmet'
import SectionHeader from '../components/sectionHeader/SectionHeader'
import '../assets/styles/Shop.css'
import products from '../assets/data/products'
import ProductsList from '../components/ProductsList/ProductsList'
import not_found from '../assets/images/notFound.gif'
const Shop = () => {

  const [allProducts,setAllProducts] = useState(products)

  const handleFilter = (e) => {
    const filterData = e.target.value;
    
    if(filterData==='category') {
      const filterProduct = products.map(
        (item) => {return item}
      )
      setAllProducts(filterProduct)
    }
    if(filterData==='sofa') {
      const filterProduct = products.filter(
        (item) => item.category === 'sofa'
      )
      setAllProducts(filterProduct)
    }
    if(filterData==='mobile') {
      const filterProduct = products.filter(
        (item) => item.category === 'mobile'
      )
      setAllProducts(filterProduct)
    }
    if(filterData==='chair') {
      const filterProduct = products.filter(
        (item) => item.category === 'chair'
      )
      setAllProducts(filterProduct)
    }
    if(filterData==='watch') {
      const filterProduct = products.filter(
        (item) => item.category === 'watch'
      )
      setAllProducts(filterProduct)
    }
    if(filterData==='wireless') {
      const filterProduct = products.filter(
        (item) => item.category === 'wireless'
      )
      setAllProducts(filterProduct)
    }
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchProduct =  products.filter(
      (item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setAllProducts(searchProduct)
  }

  const handlFilterPrice = (e) => {
    const filterPrice = e.target.value;
    if(filterPrice==='sort') {
      const filterProductPrice = products.map(
        (item) => {return item}
      )
      setAllProducts(filterProductPrice)
    }
    if(filterPrice==='cheap') {
      const filterProductPrice = products.filter(
        (item) => item.price <= 260
      )
      setAllProducts(filterProductPrice)
    }
    if(filterPrice==='exp') {
      const filterProductPrice = products.filter(
        (item) => item.price >= 260
      )
      setAllProducts(filterProductPrice)
    }
  }



  return (

    <Helmet title={'Shop'}>
        <SectionHeader title={'Products'} />

        <section className='sorting__'>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 mb-2">

                <div className="filter__Wrapper">
                  <select name="" id="" onClick={handleFilter}>
                    <option value="category">Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
          
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 mb-2">

                <div className="filter__Wrapper">
                  <select name="" id="" onClick={handlFilterPrice} >
                    <option value='sort'>Sort By</option>
                    <option value="cheap">Cheapest</option>
                    <option value="exp">Expensive</option>
                  </select>
                </div>

              </div>

              <div className="col-lg-5 col-md-5 col-sm-12">
                
                <div className="search__box d-flex align-items-center">
                  <input type="text" name="" id="" placeholder='Search....' className='w-100' onChange={handleSearch} />
                  <i class="ri-search-eye-line"></i>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className='all__products'>
          <div className="container">
            <div className="row">
              
              {
                allProducts.length === 0 ? 
                  <h1 className='text-center not_found'>There are no products to display ..                  <img src={not_found} alt="" /></h1>
                
                :
                
                
                  allProducts && allProducts.map((item) => {
                    return(
                      <ProductsList key={item.id} item={item}/>
                    )
                  })
                
                
              }
              
            </div>
          </div>
        </section>
    </Helmet>

  )
}

export default Shop
