import React, { useState, useEffect, useReducer } from 'react'
import { phonesList } from './shared/dataList.js'

const reducer = (state, action) => {
  if (action.type === 'REMOVE_ITEM') {
    return state.filter((item) => item.id !== action.payload.id)
  }
}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)

  const [state, dispatch] = useReducer(reducer, dataList)

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }

  return (
    <>
      <nav className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-center gap-4 bg-teal-500 text-white">
        <h1>UseReducer</h1>
        <h1>Cart Items: 1</h1>
      </nav>
      <div>
        <div className="flex flex-col text-center items-center justify-center">
          <h1>YOUR BAG</h1>
          <div className="w-[90vw] h-[90vh] flex flex-col items-center gap-2 text-center">
            {state.map((item, index) => (
              <div
                key={index}
                className="flex-row flex w-[100%] h-[200px] bg-slate-500 text-center items-center justify-between p-4 rounded-lg"
              >
                <div className="text-start text-white">
                  <h1 className="text-[18px]">{item.name}</h1>
                  <h3 className="text-[12px]">${item.price}</h3>
                  <button
                    onClick={() => {
                      removeItem(item.id)
                    }}
                    className="text-[15px]"
                  >
                    Remove
                  </button>
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
      <footer className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-evenly gap-4 bg-teal-500 text-white">
        <div>
          <h1>total</h1>
          <h2>$21000.20</h2>
        </div>
        <div className="flex flex-col gap-2">
          <button>Clear Cart</button>
          <button>Rest Cart</button>
        </div>
      </footer>
    </>
  )
}

export default Cart
