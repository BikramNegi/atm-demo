// components/ResetButton.js
import React from "react"
import { useAccount, ACTIONS } from "../context/AccountContext"

const ResetButton = () => {
  const { dispatch } = useAccount()

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET })
  }

  return (
    <button onClick={handleReset} className="btn btn-secondary mt-4">
      Reset
    </button>
  )
}

export default ResetButton
