import React, { useState, useEffect } from 'react'

import { useLocalStorage } from 'utilities/hooks'

import Header from 'components/organisms/Header'
import Main from 'components/organisms/Main'
import MenuSideBar from 'components/organisms/MenuSideBar'
import LightBox from 'components/organisms/LightBox'
import Overlay from 'components/organisms/Overlay'

const App = () => {
  const [showOverlay, setShowOverlay] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showLightBox, setShowLightBox] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage('cartItems', [])

  useEffect(() => {
    setShowOverlay(showMenu)
  }, [showMenu])

  useEffect(() => {
    setShowOverlay(showLightBox)
  }, [showLightBox])

  const handleClose = () => {
    setShowMenu(false)
    setShowLightBox(false)
  }

  return (
    <div className='app'>
      {showOverlay && <Overlay handleClose={handleClose} />}
      <LightBox showLightBox={showLightBox} setShowLightBox={setShowLightBox} />
      <MenuSideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header setShowMenu={setShowMenu} cartItems={cartItems} setCartItems={setCartItems} />
      <Main setShowLightBox={setShowLightBox} setCartItems={setCartItems} />
    </div>
  )
}

export default App
