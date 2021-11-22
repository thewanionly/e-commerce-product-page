import React, { useState } from 'react'

import Header from 'components/organisms/Header'
import MenuSideBar from 'components/organisms/MenuSideBar'
import Overlay from 'components/organisms/Overlay'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='app'>
      {showMenu && <Overlay />}
      <MenuSideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header setShowMenu={setShowMenu} />
      <main className='main'></main>
    </div>
  )
}

export default App
