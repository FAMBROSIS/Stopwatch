import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Stopwatch from './components/Stopwatch'
import StopwatchTwo from './components/Stopwatch2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Stopwatch />
    {/* <StopwatchTwo /> */}
  </React.StrictMode>,
)
