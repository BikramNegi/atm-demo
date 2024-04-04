import React from "react"
import Deposit from "./Deposit"
import Withdraw from "./Withdraw"
import TransactionHistory from "./TransactionHistory"
import ResetButton from "./ResetButton"

const MainLayout = () => {
  return (
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row w-full md:gap-4">
        <div className="md:w-2/3">
          <Deposit />
          <Withdraw />
        </div>
        <div className="md:w-1/3">
          <TransactionHistory />
        </div>
      </div>
      <ResetButton />
    </div>
  )
}

export default MainLayout
