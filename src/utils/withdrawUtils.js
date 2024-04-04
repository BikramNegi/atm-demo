import { ACTIONS } from "../context/AccountContext"

export const handleWithdraw = (amount, dispatch) => {
  const amountValue = parseInt(amount)
  if (!amountValue || amountValue <= 0) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: ["Please enter a valid withdrawal amount."],
    })
    return
  }
  dispatch({
    type: ACTIONS.WITHDRAW,
    payload: { amount: amountValue },
  })
}
