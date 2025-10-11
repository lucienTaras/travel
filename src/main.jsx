// src/main.jsx
import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './styles/index.css'

// Lazy load to keep bundles light
const TarasHome = lazy(() => import('./TarasHome'))
const TravelLanding = lazy(() => import('./LandingPage'))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div style={{padding:20}}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<TarasHome />} />
          <Route path="/travel" element={<TravelLanding />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
)
