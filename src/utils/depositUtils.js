import { ACTIONS } from "../context/AccountContext"

export const handleDeposit = (formData, dispatch) => {
  const { amount, denomination, quantity } = formData

  if (!validateInput(formData, dispatch)) {
    return
  }

  dispatch({
    type: ACTIONS.DEPOSIT,
    payload: {
      amount: parseInt(amount),
      denomination: parseInt(denomination),
      quantity: parseInt(quantity),
    },
  })
}

const validateInput = (formData, dispatch) => {
  const { amount, denomination, quantity } = formData
  const amountValue = parseInt(amount)
  const denominationValue = parseInt(denomination)
  const quantityValue = parseInt(quantity)

  if (
    !amountValue ||
    !denominationValue ||
    !quantityValue ||
    amountValue <= 0 ||
    denominationValue % 100 !== 0 ||
    quantityValue <= 0
  ) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: ["Please enter valid deposit details."],
    })
    return false
  }

  const totalDepositAmount = denominationValue * quantityValue

  if (totalDepositAmount !== amountValue) {
    dispatch({
      type: ACTIONS.SET_ERROR,
      payload: ["Deposit amount does not match the calculated amount."],
    })
    return false
  }

  return true
}
