// context/AccountContext.js
import React, { createContext, useContext, useReducer, useEffect } from "react"
import { saveState, initializeState } from "../utils/localStrorage"

const initialState = {
  balance: 0,
  depositedNotes: {},
  transactions: [],
  errorMessage: [],
  successMessage: [],
}

export const ACTIONS = {
  DEPOSIT: "DEPOSIT",
  WITHDRAW: "WITHDRAW",
  SET_ERROR: "SET_ERROR",
  SET_SUCCESS: "SET_SUCCESS",
  RESET_NOTIFICATIONS: "RESET_NOTIFICATIONS",
  RESET: "RESET",
}

const accountReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.DEPOSIT:
      const depositDate = new Date() // Get current date and time
      const depositAmount = action.payload.amount
      const depositTransaction = {
        amount: depositAmount,
        type: "deposit",
        date: depositDate.toLocaleDateString(),
        time: depositDate.toLocaleTimeString(),
      }

      return {
        ...state,
        balance: state.balance + depositAmount,
        depositedNotes: {
          ...state.depositedNotes,
          [action.payload.denomination]:
            (state.depositedNotes[action.payload.denomination] || 0) +
            action.payload.quantity,
        },
        transactions: [...state.transactions, depositTransaction],
        errorMessage: [],
        successMessage: ["Deposit successful."],
      }
    case ACTIONS.WITHDRAW:
      const withdrawDate = new Date() // Get current date and time
      const withdrawAmount = action.payload.amount
      const withdrawTransaction = {
        amount: withdrawAmount,
        type: "withdraw",
        date: withdrawDate.toLocaleDateString(),
        time: withdrawDate.toLocaleTimeString(),
      }
      if (withdrawAmount > state.balance) {
        return {
          ...state,
          errorMessage: ["Insufficient funds for withdrawal."],
          successMessage: [],
        }
      }
      let remainingAmount = withdrawAmount
      let remainingNotes = { ...state.depositedNotes }
      const notesToWithdraw = [2000, 1000, 500, 100]
      const withdrawnNotes = {}

      notesToWithdraw.forEach((denomination) => {
        const notesAvailable = remainingNotes[denomination] || 0
        const notesToWithdraw = Math.min(
          Math.floor(remainingAmount / denomination),
          notesAvailable
        )
        if (notesToWithdraw > 0) {
          withdrawnNotes[denomination] = notesToWithdraw
          remainingAmount -= denomination * notesToWithdraw
          remainingNotes[denomination] -= notesToWithdraw
        }
      })

      if (remainingAmount > 0) {
        return {
          ...state,
          errorMessage: [
            "Unable to dispense requested amount with available notes.",
          ],
          successMessage: [],
        }
      }

      return {
        ...state,
        balance: state.balance - withdrawAmount,
        depositedNotes: remainingNotes,
        transactions: [...state.transactions, withdrawTransaction],
        errorMessage: [],
        successMessage: ["Withdrawal successful."],
      }
    case ACTIONS.SET_ERROR:
      return { ...state, errorMessage: action.payload, successMessage: [] }
    case ACTIONS.SET_SUCCESS:
      return { ...state, errorMessage: [], successMessage: action.payload }
    case ACTIONS.RESET_NOTIFICATIONS:
      return { ...state, errorMessage: [], successMessage: [] }
    case ACTIONS.RESET:
      return initialState
    default:
      return state
  }
}

const AccountContext = createContext()

export const AccountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState, () => {
    return initializeState("appState", initialState)
  })

  // Save state to local storage whenever it changes
  useEffect(() => {
    saveState("appState", state)
  }, [state])

  return (
    <AccountContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AccountContext.Provider>
  )
}

export const useAccount = () => useContext(AccountContext)
