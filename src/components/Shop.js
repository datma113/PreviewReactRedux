import React from 'react'
import { useSelector } from 'react-redux'

const Shop = () => {
     const products = useSelector(state => state.product)

     console.log(products)
     return (
          <div>
               component shop
               <div class="form-group">
                 <input type="text"
                   class="form-control"/>
         
               </div>
          </div>
     )
}

export default Shop
