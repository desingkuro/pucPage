import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = document.getElementById('root')
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, <App />)
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

const headerScroll = () => {
  const header = document.querySelector('.cabecera')
  if (header) {
    header.classList.toggle('cabecera--scrolled', window.scrollY > 50)
  }
}

window.addEventListener('scroll', headerScroll, { passive: true })
headerScroll()

const revealElements = () => {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed)')
  els.forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('revealed')
    }
  })
}

window.addEventListener('scroll', revealElements, { passive: true })
window.addEventListener('resize', revealElements, { passive: true })

const init = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', revealElements)
  } else {
    revealElements()
  }
}

init()
