import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { iniciarFirestore } from './firebase/config'
import './index.css'

iniciarFirestore()
ReactDOM.createRoot(document.getElementById('root')).render( <App /> )
