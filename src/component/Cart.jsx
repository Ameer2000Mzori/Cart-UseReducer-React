import React, { useState, useEffect, useReducer } from 'react'
import { phonesList } from './shared/dataList.js'

const reducer = (state, action) => {
  if (action.type === 'REMOVE_ITEM') {
    return state.filter((item) => item.id !== action.payload.id)
  }
  if (action.type === 'CLEAR_LIST') {
    return []
  }
  if (action.type === 'REST_LIST') {
    return phonesList
  }
}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)

  const [state, dispatch] = useReducer(reducer, dataList)

  // removing item from lsit
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }
  // clearing list
  const ClearList = () => {
    dispatch({ type: 'CLEAR_LIST' })
  }

  // resting the list
  const restList = () => {
    dispatch({ type: 'REST_LIST' })
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
          <div className="w-[90vw] h-[90vh] flex flex-col items-center gap-2 text-center overflow-auto">
            {state.map((item, index) => (
              <div
                key={index}
                className="flex-row flex w-[100%] h-[150px] bg-slate-500 text-center items-center justify-between p-4 rounded-lg"
              >
                <div className="text-start text-white">
                  <h1 className="text-[18px]">{item.name}</h1>
                  <h3 className="text-[12px]">${item.price}</h3>
                  <button
                    onClick={() => {
                      removeItem(item.id)
                    }}
                    className="text-[15px] bg-black pr-2 pl-2"
                  >
                    Remove
                  </button>
                </div>

                <div className="text-white text-[12px] gap-4 h-[100%] flex flex-col text-center items-center justify-center">
                  <button className="bg-black pr-2 pl-2">+</button>
                  <h2>{item.amount}</h2>
                  <button className="bg-black pr-2 pl-2">-</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-evenly gap-4 bg-teal-500 text-white">
        <div>
          <h1>total</h1>
          <h2>$4230</h2>
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={ClearList} className="bg-black pr-2 pl-2">
            Clear Cart
          </button>
          <button onClick={restList} className="bg-black pr-2 pl-2">
            Rest Cart
          </button>
        </div>
      </footer>
    </>
  )
}

export default Cart
