'use client'

import { useState } from 'react'

export default function NavMenu() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <>
      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links-mobile${open ? ' open' : ''}`} role="navigation">
        <a href="#nosotros" onClick={close}>Nosotros</a>
        <a href="#habitaciones" onClick={close}>Habitaciones</a>
        <a href="#servicios" onClick={close}>Servicios</a>
        <a href="#instalaciones" onClick={close}>Instalaciones</a>
        <a href="#contacto" onClick={close}>Contacto</a>
        <a href="#reserva" className="reserve-mobile" onClick={close}>Reservar</a>
      </div>
    </>
  )
}
