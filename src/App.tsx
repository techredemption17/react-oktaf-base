import TestEntity from './real-entity/TestEntity'
import React from 'react'
function App() {
  const testEntity: TestEntity = { id: 'asdf' }

  return (
    <div className='App'>
      <>{console.log(testEntity)}</>
      xxx
    </div>
  )
}

export default App
