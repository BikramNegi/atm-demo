import React, { useState, useEffect } from "react"
import { useAccount } from "../context/AccountContext"

const Header = () => {
  const { balance } = useAccount()
  const [prevBalance, setPrevBalance] = useState(balance)
  const [tempClass, setTempClass] = useState("")

  useEffect(() => {
    if (prevBalance < balance) {
      // Deposit happened
      setTempClass("animate-fillGreen")
    } else if (prevBalance > balance) {
      // Withdraw happened
      setTempClass("animate-fillRed")
    }

    // Update previous balance
    setPrevBalance(balance)

    // Remove animation class after animation ends
    const timeoutId = setTimeout(() => {
      setTempClass("")
    }, 3000) // Duration of animation

    return () => clearTimeout(timeoutId)
  }, [balance]) // Run effect whenever balance changes

  return (
    <header className="sticky top-0 bg-gray-800 py-4 px-6 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <img src="/assets/logo.png" alt="Logo" className="w-10 h-auto mr-2" />
        <span className="hidden md:inline text-white font-semibold text-lg ">
          ATM DEMO
        </span>
      </div>

      {/* Account balance on the right */}
      <div>
        <span className="text-white mr-2">Account Balance:</span>
        <span className={`text-white font-semibold ${tempClass}`}>
          {balance}
        </span>
      </div>
    </header>
  )
}

export default Header
