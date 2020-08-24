import React, { useState, createContext } from "react"

const DrawerCartContext = createContext()

const DrawerCartContextProvider = props => {
  const [openCart, setOpenCart] = useState(false)

  const handleCartDrawerOpen = () => {
    setOpenCart(true)
    document.body.style.position = "fixed"
  }
  const handleCartDrawerClose = () => {
    setOpenCart(false)
    const scrollY = document.body.style.top
    document.body.style.position = ""
  }

  return (
    <DrawerCartContext.Provider
      value={{
        openCart,
        handleCartDrawerOpen,
        handleCartDrawerClose,
      }}
    >
      {props.children}
    </DrawerCartContext.Provider>
  )
}

export { DrawerCartContextProvider, DrawerCartContext }
