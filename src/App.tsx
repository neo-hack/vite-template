import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import routes from '~react-pages'

import { ThemeProvider } from '@/styles/theme'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <React.Suspense fallback={<div>loading...</div>}>{useRoutes(routes)}</React.Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
