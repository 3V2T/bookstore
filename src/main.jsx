import React from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { AppProvider } from './components/context.jsx'
import { Provider } from 'react-redux'
import store from './store'
import { ToastContainer } from'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import '../src/assets/scss/App.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
        <ToastContainer position="top-center" />
      </AppProvider>
    </Provider>
  </React.StrictMode>
)
