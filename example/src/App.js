import React from 'react'

import { useMyHook } from 'hoc-with-props'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
