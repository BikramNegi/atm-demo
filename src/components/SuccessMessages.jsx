// components/SuccessMessages.js
import React from "react"
import { useAccount } from "../context/AccountContext"

const SuccessMessages = () => {
  const { successMessage } = useAccount()

  return (
    <div className="bg-green-500 text-white" aria-live="polite">
      {successMessage &&
        successMessage.length > 0 &&
        successMessage.map((success, index) => (
          <div key={index}>{success}</div>
        ))}
    </div>
  )
}

export default SuccessMessages
