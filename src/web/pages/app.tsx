import * as React from 'react'
import Routers from '../routes'
import { BrowserRouter } from 'react-router-dom'
const App = ()=>{
  return <BrowserRouter basename="/">{Routers()}</BrowserRouter>
}

export default App;