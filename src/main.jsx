// src/main.jsx
import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CompanySite from './CompanySite'
import './styles/index.css'

const TravelLanding = lazy(() => import('./LandingPage'))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{ padding: 20 }}>Loading…</div>}>
        <Routes>
          <Route path="/travel" element={<TravelLanding />} />
          <Route path="*" element={<CompanySite />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
