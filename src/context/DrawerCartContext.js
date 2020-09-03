import React, { useState, createContext } from "react"

const DrawerCartContext = createContext()

const DrawerCartContextProvider = props => {
  const [openDrawerCart, setOpenDrawerCart] = useState(false)

  const handleDrawerCartOpen = () => {
    setOpenDrawerCart(true)
    document.body.style.position = "fixed"
  }
  const handleDrawerCartClose = () => {
    setOpenDrawerCart(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <DrawerCartContext.Provider
      value={{
        openDrawerCart,
        handleDrawerCartOpen,
        handleDrawerCartClose,
      }}
    >
      {props.children}
    </DrawerCartContext.Provider>
  )
}

export { DrawerCartContextProvider, DrawerCartContext }
