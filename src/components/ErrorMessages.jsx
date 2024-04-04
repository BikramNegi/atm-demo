// components/ErrorMessages.js
import React from "react"
import { useAccount } from "../context/AccountContext"

const ErrorMessages = () => {
  const { errorMessage } = useAccount()

  return (
    <div className="bg-red-500 text-white" aria-live="polite">
      {errorMessage &&
        errorMessage.length > 0 &&
        errorMessage.map((error, index) => <div key={index}>{error}</div>)}
    </div>
  )
}

export default ErrorMessages
