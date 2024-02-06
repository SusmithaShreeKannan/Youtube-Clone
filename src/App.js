import React from 'react'
import Navbar from './components/Navbar'
import Watch from './components/Watch'
import { createBrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div >
      <Navbar/>
     
    </div>
  )
}
 
export const appRouter = createBrowserRouter ([
  {
    path: '/',
    element:<App/>
  },
  {
     path: '/watch',
     element: <Watch/>
  }
])



export default App