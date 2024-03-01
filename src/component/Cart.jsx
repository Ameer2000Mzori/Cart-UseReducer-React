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
    const updatedState = phonesList.map((item) => ({
      ...item,
      amount: 1,
    }))
    return updatedState
  }

  if (action.type === 'ADD_ONE') {
    return state.map((item) =>
      item.id === action.payload.id
        ? { ...item, amount: (item.amount += 1) }
        : item
    )
  }
  if (action.type === 'REMOVE_ONE') {
    // First, decrement the amount if it matches the condition
    const updatedState = state.map((item) =>
      item.id === action.payload.id
        ? { ...item, amount: item.amount - 1 }
        : item
    )

    return updatedState.filter((item) => item.amount > 0)
  }
}

const Cart = () => {
  const [dataList, setDataList] = useState(phonesList)
  const [state, dispatch] = useReducer(reducer, dataList)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    // Calculate total items
    const total = state.reduce((acc, item) => acc + item.amount, 0)
    const price = state.reduce((acc, item) => acc + item.price * item.amount, 0)
    setTotalItems(total)
    setTotalPrice(price)
  }, [state])

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

  const addOne = (id) => {
    dispatch({ type: 'ADD_ONE', payload: { id } })
  }

  const removeOne = (id) => {
    dispatch({ type: 'REMOVE_ONE', payload: { id } })
  }

  return (
    <>
      <nav className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-center gap-4 bg-teal-500 text-white">
        <h1>UseReducer</h1>
        <h1>items : {totalItems}</h1>
      </nav>
      <div>
        <div className="flex flex-col text-center items-center justify-center">
          <h1>YOUR BAG</h1>
          <div className="w-[90vw] h-[80vh] flex flex-col items-center gap-2 text-center overflow-auto">
            {state?.map((item, index) => (
              <div
                key={index}
                className="flex-row flex w-[100%] h-[150px] bg-slate-500 text-center items-center justify-between p-4 rounded-lg overflow-auto"
              >
                <div className="text-start text-white">
                  <h1 className="text-[18px]">{item.name}</h1>
                  <h3 className="text-[12px]">${item.price * item.amount}</h3>
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
                  <button
                    onClick={() => {
                      addOne(item.id)
                    }}
                    className="bg-black pr-2 pl-2"
                  >
                    +
                  </button>
                  <h2>{item.amount}</h2>
                  <button
                    onClick={() => {
                      removeOne(item.id)
                    }}
                    className="bg-black pr-2 pl-2"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="w-[100%] h-[10vh] flex flex-row text-center items-center justify-evenly gap-4 bg-teal-500 text-white">
        <div>
          <h1>total</h1>
          <h2>
            <div>Total price: ${totalPrice}</div>
          </h2>
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
