import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import routes from '~react-pages'

import { ThemeProvider } from '@/styles/theme'

console.log(routes)

const Routes = () => {
  const elements = useRoutes(routes)
  return elements
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <React.Suspense fallback={<div>loading...</div>}>
          <Routes />
        </React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
