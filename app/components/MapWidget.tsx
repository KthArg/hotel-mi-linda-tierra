'use client'

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const COORDS: [number, number] = [10.328, -84.431]

export default function MapWidget() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    let cleanup = () => {}

    ;(async () => {
      const L = (await import('leaflet')).default

      const map = L.map(containerRef.current!, {
        center: COORDS,
        zoom: 15,
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        keyboard: false,
      })

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        { maxZoom: 19, subdomains: 'abcd' }
      ).addTo(map)

      const icon = L.divIcon({
        className: '',
        html: `<div style="
          width:18px;height:18px;
          background:#e8d68a;
          border-radius:50%;
          border:3px solid rgba(232,214,138,.45);
          box-shadow:0 0 0 6px rgba(232,214,138,.18),0 4px 14px rgba(0,0,0,.25);
        "></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      })

      L.marker(COORDS, { icon }).addTo(map)

      mapRef.current = map
      cleanup = () => {
        ;(map as L.Map).remove()
        mapRef.current = null
      }
    })()

    return () => cleanup()
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
