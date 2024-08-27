import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Blogs from './components/Blogs'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
 
 
const App = () => {
  return (
    <>
    <div >
      <Navbar/>
  <ProductList/>
  <Blogs/>
  <FAQ/>
  <Newsletter/>
  <Footer/>
    </div>
    </>
  )
}

export default App