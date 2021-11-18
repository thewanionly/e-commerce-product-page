import React from 'react'

import Icon from 'components/atoms/Icon'

const App = () => {
  return (
    <div className='app'>
      <header className='header'>sneakers</header> {/* to replace with logo.svg */}
      <main className='main'>
        <Icon type='svg' fill='green' />
      </main>
    </div>
  )
}

export default App
