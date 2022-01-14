import React from 'react'
import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom'

import * as styles from './App.css'
import NotFound from './pages/not-found'

const Demo = React.lazy(() => import('@/pages/demo'))
const Home = React.lazy(() => import('@/pages/home'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const Routes = () => {
  const elements = useRoutes(routes)
  return elements
}

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <React.Suspense fallback={<div>loading...</div>}>
          <Routes />
        </React.Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
