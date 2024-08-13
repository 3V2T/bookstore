// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
// import { store } from './store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  // <Provider store={store}>

    <App tab="home" />

)