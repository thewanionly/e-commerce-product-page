import React, { useState } from 'react'

import Header from 'components/organisms/Header'
import MenuSideBar from 'components/organisms/MenuSideBar'

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='app'>
      <MenuSideBar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Header setShowMenu={setShowMenu} />
      <main className='main'></main>
    </div>
  )
}

export default App
