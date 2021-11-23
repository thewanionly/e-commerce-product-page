import React, { useState } from 'react'

import Header from 'components/organisms/Header'
import Main from 'components/organisms/Main'
import MenuSideBar from 'components/organisms/MenuSideBar'
import Overlay from 'components/organisms/Overlay'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='app'>
      {showMenu && <Overlay />}
      <MenuSideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header setShowMenu={setShowMenu} />
      <Main />
    </div>
  )
}

export default App
