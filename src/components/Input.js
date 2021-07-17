import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Input = ( {placeHolder, action, keyOfValue} ) => {
     const dispatch = useDispatch()
     const getValue = (e) => {
          const { value } = e.target
          console.log(keyOfValue, value)
          dispatch(action(keyOfValue, value))
     }
     
     return (
          <div>
               <div className="form-group">
                 <input type="text"
                   className="form-control"
                   placeholder={placeHolder}
                   onChange={getValue}
                   />
               </div>
          </div>
     )
}

export default Input
