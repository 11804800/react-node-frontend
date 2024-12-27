import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { BrowserRouter } from './utils/BrowserRouter.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={BrowserRouter} />
    </Provider>
  </StrictMode>,
)
