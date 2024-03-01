import React, { useState, useEffect, useReducer } from 'react'
import { phonesList } from './shared/dataList.js'

const reducer = (state, action) => {}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)

  const [state, dispatch] = useReducer(reducer, dataList)

  return (
    <>
      <nav className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-center gap-4 bg-teal-500 text-white">
        <h1>UseReducer</h1>
        <h1>Cart Items: 1</h1>
      </nav>
      <div>
        <div className="flex flex-col text-center items-center justify-center">
          <h1>YOUR BAG</h1>
          <div className="w-[90vw] h-[90vh] flex flex-col text-center items-center gap-2 text-center">
            {state.map((item, index) => (
              <div
                key={index}
                className="flex-row flex w-[100%] h-[200px] bg-zinc-500 text-center items-center justify-between p-4 rounded-lg"
              >
                <div className="text-start text-white">
                  <h1 className="text-[18px]">{item.name}</h1>
                  <h3 className="text-[12px]">${item.price}</h3>
                  <button className="text-[15px]">Remove</button>
                </div>

                <div className="text-white text-[12px] gap-4 h-[100%] flex flex-col text-center items-center justify-center">
                  <button>add </button>
                  <h2>{item.amount}</h2>
                  <button>remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
