import React, { useState, useEffect, useReducer } from 'react'
import { phonesList } from './shared/dataList.js'

const reducer = (state, action) => {}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)

  const [state, dispatch] = useReducer(reducer, dataList)

  return (
    <div>
      {state.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  )
}

export default Cart
