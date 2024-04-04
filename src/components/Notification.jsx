// Notification.js
import React, { useState, useEffect } from "react"
import ErrorMessages from "./ErrorMessages"
import SuccessMessages from "./SuccessMessages"
import { useAccount } from "../context/AccountContext"

const Notification = () => {
  const { errorMessage, successMessage, dispatch } = useAccount()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set isVisible to true when either errorMessage or successMessage is truthy
    if (errorMessage || successMessage) {
      setIsVisible(true)

      // Hide notification after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
        dispatch({ type: "RESET_NOTIFICATIONS" })
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [errorMessage, successMessage])

  return (
    <div
      className={`fixed w-full text-center mx-auto ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {errorMessage && <ErrorMessages message={errorMessage} />}
      {successMessage && <SuccessMessages message={successMessage} />}
    </div>
  )
}

export default Notification
