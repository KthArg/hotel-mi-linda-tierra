'use client'

import { useEffect, useState } from 'react'

type Phase = 'disclaimer' | 'loading' | 'done'

export default function Intro() {
  const [phase, setPhase] = useState<Phase>('disclaimer')
  const [disclaimerFading, setDisclaimerFading] = useState(false)
  const [loaderFading, setLoaderFading] = useState(false)

  useEffect(() => {
    if (phase === 'done') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [phase])

  function handleEnter() {
    setDisclaimerFading(true)
    // 400ms: disclaimer fades out → switch to loader
    setTimeout(() => setPhase('loading'), 400)
    // 2700ms from click = 2300ms from loader mount (100ms after bar fill ends at 2200ms)
    setTimeout(() => setLoaderFading(true), 2700)
    // 3450ms: fade-out complete → reveal page
    setTimeout(() => setPhase('done'), 3450)
  }

  if (phase === 'done') return null

  return (
    <>
      {phase === 'disclaimer' && (
        <div className={`intro-backdrop${disclaimerFading ? ' fade-out' : ''}`}>
          <div className="disclaimer-card">
            <div className="disclaimer-chip">Aviso</div>
            <h2 className="disclaimer-title">Sitio en desarrollo</h2>
            <p className="disclaimer-body">
              Este es un prototipo de diseño visual. El contenido mostrado — imágenes, precios,
              habitaciones, servicios y datos de contacto — es{' '}
              <strong>ficticio y no corresponde a ningún hotel real</strong>. El propósito de
              este sitio es únicamente mostrar el estilo visual y la experiencia de usuario
              del diseño.
            </p>
            <button className="disclaimer-btn" onClick={handleEnter}>
              Entendido · Explorar el diseño
            </button>
          </div>
        </div>
      )}

      {phase === 'loading' && (
        <div className={`loader-screen${loaderFading ? ' fade-out' : ''}`}>
          <p className="loader-eyebrow">San Carlos · Costa Rica · Est. 2018</p>
          <h1 className="loader-brand">Mi Linda Tierra</h1>
          <p className="loader-tagline">preparando la experiencia</p>
          <div className="loader-bar-wrap">
            <div className="loader-bar-fill" />
          </div>
        </div>
      )}
    </>
  )
}
