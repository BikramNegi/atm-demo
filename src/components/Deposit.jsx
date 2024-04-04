import React, { useState } from "react"
import { useAccount } from "../context/AccountContext"
import { handleDeposit } from "../utils/depositUtils"

const Deposit = () => {
  const { dispatch } = useAccount()
  const [formData, setFormData] = useState({
    amount: "",
    denomination: "",
    quantity: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async () => {
    setLoading(true)
    handleDeposit(formData, dispatch)
    setFormData({
      amount: "",
      denomination: "",
      quantity: "",
    })
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full flex flex-col my-4 rounded-md border-2 border-gray-800 shadow-lg">
      <span className="block w-full text-md text-center bg-gray-800 text-white p-1">
        Deposit Money
      </span>
      <div className=" flex flex-col m-2 gap-2 ">
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
            formData.amount ? "bg-white" : "bg-gray-200"
          }`}
          placeholder="Amount"
        />

        <select
          name="denomination"
          value={formData.denomination}
          onChange={handleChange}
          className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
            formData.denomination ? "bg-white" : "bg-gray-200"
          }`}
        >
          <option value="">Select Denomination</option>
          <option value="100">100</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
        </select>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
            formData.quantity ? "bg-white" : "bg-gray-200"
          }`}
          placeholder="Quantity"
        />

        <button
          onClick={handleSubmit}
          className={`btn w-full ${
            loading ||
            !(formData.amount && formData.denomination && formData.quantity)
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
          disabled={
            loading ||
            !(formData.amount && formData.denomination && formData.quantity)
          }
        >
          {loading ? "Processing..." : "Deposit"}
        </button>
      </div>
    </div>
  )
}

export default Deposit
