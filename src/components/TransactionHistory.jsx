import React, { useMemo, useState } from "react"
import { useAccount } from "../context/AccountContext"

const TransactionHistory = () => {
  const { transactions } = useAccount()
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5 // Adjust as needed

  const convertTransactionString = (eachAmount, type) => {
    if (type == "deposit") {
      return `+${eachAmount}`
    }
    return `-${eachAmount}`
  }

  const listClassAdder = (eachAmount, type) => {
    let number = parseInt(convertTransactionString(eachAmount, type))
    return number >= 0 ? "bg-green-500" : "bg-red-500"
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(transactions.length / itemsPerPage)

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const transactionList = useMemo(
    () =>
      transactions &&
      transactions.length > 0 &&
      transactions
        .slice(startIndex, endIndex) // Display only items for current page
        .map((transaction, index) => (
          <li
            key={index}
            className={`text-sm p-1 list-none rounded text-white  ${listClassAdder(
              transaction.amount,
              transaction.type
            )}`}
          >
            <div className="flex justify-between">
              <span>
                {convertTransactionString(transaction.amount, transaction.type)}
              </span>
              <span>{transaction.date}</span>
              <span>{transaction.time}</span>
            </div>
          </li>
        )),
    [transactions, currentPage]
  )

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  return (
    <div className="w-full flex flex-col my-4 rounded-md border-2 border-gray-800 shadow-lg">
      <span className="block w-full text-md text-center bg-gray-800 text-white p-1">
        Transaction history
      </span>
      <div className="flex flex-col m-2 gap-2">{transactionList}</div>
      <div className="flex justify-center m-4">
        <button
          className="bg-gray-800 text-white py-1 px-2 text-sm rounded-md mr-2 disabled:opacity-25"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 text-white py-1 px-2 text-sm rounded-md disabled:opacity-25"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TransactionHistory
