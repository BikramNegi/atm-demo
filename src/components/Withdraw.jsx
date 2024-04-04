import React, { useState } from "react"
import { useAccount } from "../context/AccountContext"
import { handleWithdraw } from "../utils/withdrawUtils"

const Withdraw = () => {
  const { dispatch } = useAccount()
  const [amount, setAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = () => {
    setLoading(true)
    handleWithdraw(amount, dispatch)
    setAmount("")
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full flex flex-col my-4 rounded-md border-2 border-gray-800 shadow-lg">
      <span className="block w-full text-md text-center bg-gray-800 text-white p-1">
        Withdraw Money
      </span>
      <div className=" flex flex-col m-2 gap-2 ">
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
            amount ? "bg-white" : "bg-gray-200"
          }`}
          placeholder="Amount"
        />
        <button
          onClick={handleSubmit}
          className={`btn w-full ${
            loading || !amount ? "opacity-40 cursor-not-allowed" : ""
          }`}
          disabled={loading || !amount}
        >
          {loading ? "Processing..." : "Withdraw"}
        </button>
      </div>
    </div>
  )
}

export default Withdraw
