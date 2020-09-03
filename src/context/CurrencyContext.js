import React, { useState, createContext } from "react"

const CurrencyContext = createContext()

const CurrencyContextProvider = props => {
  const [actCurrency, setActCurrency] = useState("USD")

  const handleCurrencyChange = event => {
    setActCurrency(event.target.value)
    // forceUpdate()
  }

  return (
    <CurrencyContext.Provider
      value={{
        actCurrency,
        handleCurrencyChange,
      }}
    >
      {props.children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyContextProvider, CurrencyContext }
