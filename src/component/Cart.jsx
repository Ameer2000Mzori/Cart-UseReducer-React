import React, { useState, useEffect, useReducer } from 'react'
import { phonesList } from './shared/dataList.js'

const reducer = (state, action) => {}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)

  const [state, dispatch] = useReducer(reducer, dataList)

  return (
    <div>
      {state.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <h3>${item.price}</h3>
          <button>Remove</button>
          <div>
            <button>add one</button>
            <h2>{item.amount}</h2>
            <button>remove one</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart
