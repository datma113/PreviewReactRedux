import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Input = ( {placeHolder, action} ) => {
     const dispatch = useDispatch()
     const getValue = (e) => {
          dispatch(action(e.target.value))
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
