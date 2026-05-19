import NavMenu from './components/NavMenu'
import ScrollAnimations from './components/ScrollAnimations'
import MapWidget from './components/MapWidget'
import Intro from './components/Intro'

export default function HomePage() {
  return (
    <>
      <Intro />
      <ScrollAnimations />
      {/* =========================================
          NAV
      ========================================= */}
      <nav className="nav">
        <a href="#" className="mark">Mi Linda Tierra</a>
        <ul>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#habitaciones">Habitaciones</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#instalaciones">Instalaciones</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a href="#reserva" className="reserve">Reservar</a>
        <NavMenu />
      </nav>

      {/* =========================================
          HERO
      ========================================= */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: "url('/images/caption.jpg')" }}
        />
        <div className="hero-eyebrow">San Carlos · Costa Rica · Est. 2018</div>
        <div className="hero-content">
          <div />
          <div className="hero-title">
            <div className="welcome">Welcome to</div>
            <h1 className="brand">Mi Linda Tierra</h1>
            <div className="tagline">donde cada estadía es pura paz</div>
          </div>
          <div className="hero-foot">
            <div className="meta">
              <strong>Coordenadas</strong>
              10°20′N · 84°25′W
            </div>
            <div className="center">
              Descubre
              <div className="scroll-indicator" />
            </div>
            <div className="right meta">
              <strong>Altitud</strong>
              180 m sobre el mar
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          CAP I — NOSOTROS / ABOUT US  (paper bg)
      ========================================= */}
      <section className="prologue" id="nosotros">
        <div className="prologue-img" data-animate="left">
          <div
            className="frame-1"
            style={{ backgroundImage: "url('/images/photo-1.jpg')" }}
          />
          <div className="stamp">
            <span>Pura</span>
            <span>vida · 2018</span>
          </div>
          <div
            className="frame-2"
            style={{ backgroundImage: "url('/images/photo-3.webp')", backgroundPosition: 'top center' }}
          />
        </div>

        <div className="prologue-text" data-animate="right">
          <div className="kicker">Capítulo I — Nuestra Historia</div>
          <h2>
            Una <em>pausa</em>
            <br />entre el bosque
            <br />y el cielo.
          </h2>
          <p>
            Todo comenzó en 2018, cuando Doña Marisol Vargas y su esposo Don Rodrigo
            decidieron convertir la finca familiar en un refugio para viajeros que,
            como ellos, amaban el silencio verde de San Carlos. Lo que era un potrero
            y tres casitas de madera se transformó en once habitaciones llenas de alma.
          </p>
          <p>
            Cada rincón guarda algo de esa historia: las vigas de cedro que cortaron
            los vecinos del pueblo, las piedras volcánicas del río que forran los baños,
            las flores de heliconia que sembró la abuela y que siguen floreciendo cada marzo.
          </p>
          <p>
            Hoy, los hijos y nietos de Marisol reciben a los huéspedes con el mismo café
            que ella aprendió a preparar de su madre: molido a mano, colado despacio,
            servido caliente. Aquí no hay prisa. Hay tucanes, hay neblina temprana, hay tiempo.
          </p>
          <div className="signature">
            Doña Marisol &amp; familia
            <small>Anfitriones desde 2018</small>
          </div>
        </div>
      </section>

      {/* =========================================
          CAP II — HABITACIONES  (forest bg)
          Transición: paper → forest, curva hacia abajo
      ========================================= */}
      <section className="rooms" id="habitaciones">
        <div className="rooms-header" data-animate>
          <div className="kicker">Capítulo II — Habitaciones</div>
          <h2>
            Habitaciones <em>del bosque</em>
          </h2>
          <p>tres formas de despertar abrazado por la selva</p>
        </div>

        <div className="rooms-grid">
          <article className="room-card deluxe" data-animate="scale">
            <div className="photo">
              <img
                src="/images/room-1.jpg"
                alt="Habitación Deluxe — dos camas queen"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="num">N° 01 — Deluxe</div>
            </div>
            <h3>Suite Deluxe</h3>
            <div className="price">$148<small>/ noche</small></div>
            <p className="desc">
              Dos camas queen, balcón privado mirando al bosque y baño con piedra
              volcánica. Pensada para parejas que viajan juntas o quien prefiere
              espacio para soñar.
            </p>
            <ul className="feats">
              <li>Balcón</li>
              <li>2 Queen</li>
              <li>Desayuno</li>
              <li>WiFi</li>
            </ul>
          </article>

          <article className="room-card suite" data-animate="scale">
            <div className="photo">
              <img
                src="/images/room-3.jpg"
                alt="Suite Tucán — ventanal con vista al bosque"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="num">N° 02 — Suite</div>
            </div>
            <h3>Suite Tucán</h3>
            <div className="price">$215<small>/ noche</small></div>
            <p className="desc">
              Nuestra habitación insignia: ventanal de seis metros, hamaca de
              manila, tina con vista al cañón. Por las mañanas, el desayuno llega
              en una bandeja de cedro mientras los tucanes pasan a saludar.
            </p>
            <ul className="feats">
              <li>Ventanal</li>
              <li>King Size</li>
              <li>Tina</li>
              <li>Hamaca</li>
              <li>Desayuno</li>
            </ul>
          </article>

          <article className="room-card bungalow" data-animate="scale">
            <div className="photo">
              <img
                src="/images/room-2.jpg"
                alt="Bungalow Río"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="num">N° 03 — Bungalow</div>
            </div>
            <div className="layout">
              <div>
                <h3>Bungalow Río</h3>
                <div className="price">$320<small>/ noche</small></div>
              </div>
              <div>
                <p className="desc">
                  Una pequeña casa independiente, levantada sobre pilotes de
                  laurel, con su propia terraza, jacuzzi al aire libre y el río
                  corriendo a treinta pasos. Para familias o quien busca una
                  verdadera intimidad con la selva.
                </p>
                <ul className="feats">
                  <li>Casa privada</li>
                  <li>Jacuzzi</li>
                  <li>Terraza</li>
                  <li>Cocina</li>
                  <li>2 cuartos</li>
                </ul>
              </div>
            </div>
          </article>

          <div className="editorial-quote">
            Pura vida no es una frase, es una manera de respirar.
          </div>
        </div>
      </section>

      {/* =========================================
          CAP III — SERVICIOS  (paper bg)
          Transición: forest → paper, curva hacia arriba
      ========================================= */}
      <section className="servicios" id="servicios">
        <div className="servicios-header" data-animate>
          <div className="kicker">Capítulo III — Servicios</div>
          <h2>
            Todo lo que <em>necesitas</em>
          </h2>
          <p>ocho razones para quedarse un día más</p>
        </div>

        <div className="servicios-grid">
          {([
            { num: '01', title: 'Desayuno Típico', desc: 'Gallo pinto, empanadas, frutas tropicales y café de altura. Servido cada mañana en la terraza abierta con vista al bosque.' },
            { num: '02', title: 'Restaurante La Ceiba', desc: 'Cocina tico-fusión con ingredientes de fincas vecinas. Abierto al mediodía y la noche, también al público.' },
            { num: '03', title: 'Piscina Natural', desc: 'Enmarcada entre helechos y piedra volcánica, refleja el cielo y el dosel del bosque. Abierta de 7am a 9pm.' },
            { num: '04', title: 'Senderos Guiados', desc: 'Tres rutas a pie con guías del pueblo. Desde 1 hasta 4 horas, aptas para todos los niveles y edades.' },
            { num: '05', title: 'Tours Regionales', desc: 'Volcán Arenal, aguas termales, rafting y canopying. Todo organizado desde recepción, sin complicaciones.' },
            { num: '06', title: 'Avistamiento de Aves', desc: 'Más de 400 especies en la zona. Salidas al amanecer con guía ornitólogo local y binoculares incluidos.' },
            { num: '07', title: 'Traslados', desc: 'Van privada desde el aeropuerto Juan Santamaría o la terminal de buses de San José. Reserva con anticipación.' },
            { num: '08', title: 'WiFi & Lounge', desc: 'Internet de fibra en todas las áreas. Zona de trabajo tranquila para quienes mezclan trabajo y naturaleza.' },
          ] as { num: string; title: string; desc: string }[]).map(s => (
            <article className="srv-card" data-animate="scale" key={s.num}>
              <div className="srv-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          CAP IV — INSTALACIONES  (forest bg)
          Transición: paper → forest, curva hacia abajo
      ========================================= */}
      <section className="instalaciones" id="instalaciones">
        <div className="inst-header" data-animate>
          <div className="kicker">Capítulo IV — Instalaciones</div>
          <h2>
            Más allá <em>del cuarto</em>
          </h2>
          <p>los espacios que hacen el hotel</p>
        </div>

        <div className="inst-grid">
          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
              alt="Piscina natural"
            />
            <div className="label">
              <div className="num">01 · Agua</div>
              <h4>Piscina Natural</h4>
              <p>piedra volcánica, rodeada de helechos</p>
            </div>
          </article>

          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80"
              alt="Restaurante La Ceiba"
            />
            <div className="label">
              <div className="num">02 · Mesa</div>
              <h4>Restaurante La Ceiba</h4>
              <p>cocina abierta, vista al jardín</p>
            </div>
          </article>

          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo-3.webp"
              alt="Jardines tropicales"
            />
            <div className="label">
              <div className="num">03 · Verde</div>
              <h4>Jardines Tropicales</h4>
              <p>4 acres de flora nativa y senderos</p>
            </div>
          </article>

          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80"
              alt="Terraza mirador"
            />
            <div className="label">
              <div className="num">04 · Vista</div>
              <h4>Terraza Mirador</h4>
              <p>atardeceres sobre el bosque nuboso</p>
            </div>
          </article>

          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/photo-1.jpg"
              alt="Sendero del río"
            />
            <div className="label">
              <div className="num">05 · Camino</div>
              <h4>Sendero del Río</h4>
              <p>1.2 km entre helechos y guácimos</p>
            </div>
          </article>

          <article className="inst-card" data-animate="scale">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1516214104703-d870798883c5?w=900&q=80"
              alt="Hoguera comunitaria"
            />
            <div className="label">
              <div className="num">06 · Fuego</div>
              <h4>Hoguera Comunitaria</h4>
              <p>noches estrelladas, historias y s&apos;mores</p>
            </div>
          </article>
        </div>
      </section>

      {/* =========================================
          CAP V — CONTÁCTENOS  (paper bg)
          Transición: forest → paper, curva hacia arriba
      ========================================= */}
      <section className="contacto-section" id="contacto">
        <div className="contacto-inner">
          <div className="contacto-info" data-animate="left">
            <div className="kicker">Capítulo V — Contáctenos</div>
            <h2>
              Estamos <em>aquí</em>
              <br />para ti.
            </h2>
            <p>
              ¿Tienes preguntas, necesitas una cotización especial o simplemente
              quieres saber más? Escríbenos o llámanos —respondemos antes de que
              oscurezca.
            </p>
            <div className="contacto-items">
              <div className="citem">
                <div className="citem-label">Dirección</div>
                <div className="citem-value">
                  1 km norte del Hospital San Carlos<br />
                  Ciudad Quesada, Alajuela<br />
                  Costa Rica
                </div>
              </div>
              <div className="citem">
                <div className="citem-label">Teléfono</div>
                <div className="citem-value">
                  <a href="tel:+50624612244">+506 2461-2244</a><br />
                  <a href="tel:+50685212626">+506 8521-2626</a>
                </div>
              </div>
              <div className="citem">
                <div className="citem-label">Correo</div>
                <div className="citem-value">
                  <a href="mailto:hola@milindatierra.cr">hola@milindatierra.cr</a>
                </div>
              </div>
              <div className="citem">
                <div className="citem-label">Horario recepción</div>
                <div className="citem-value">Todos los días · 6:00 am – 10:00 pm</div>
              </div>
            </div>
            <div className="contacto-ctas">
              <a href="https://wa.me/50685212626" className="cta-whatsapp">WhatsApp →</a>
              <a href="mailto:hola@milindatierra.cr" className="cta-email">Enviar correo →</a>
            </div>
          </div>

          <div className="contacto-deco" data-animate="right">
            <div className="map-card">
              <MapWidget />
              <div className="map-card-label">
                <div className="map-card-name">Hotel Mi Linda Tierra</div>
                <div className="map-card-coords">10°20′N · 84°25′W</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BOOKING
          Transición: paper → forest, curva hacia abajo
      ========================================= */}
      <section className="booking" id="reserva">
        <div className="booking-inner">
          <div
            className="booking-img"
            style={{ backgroundImage: "url('/images/photo-1.jpg')" }}
          >
            <div className="pull-quote">
              Date un respiro <em>este fin</em>
              <br />de semana.
            </div>
          </div>
          <div className="booking-form">
            <div className="kicker">Reservar</div>
            <h2>
              Tu próxima <em>pausa</em>
            </h2>
            <p>
              Cuéntanos cuándo quieres venir y armamos los detalles. Respondemos
              en menos de 24 horas.
            </p>

            <div className="form-fields">
              <div className="field">
                <label htmlFor="llegada">Llegada</label>
                <input id="llegada" type="text" defaultValue="14 May 2026" />
              </div>
              <div className="field">
                <label htmlFor="salida">Salida</label>
                <input id="salida" type="text" defaultValue="17 May 2026" />
              </div>
              <div className="field">
                <label htmlFor="habitacion">Habitación</label>
                <select id="habitacion" defaultValue="Suite Deluxe">
                  <option>Suite Deluxe</option>
                  <option>Suite Tucán</option>
                  <option>Bungalow Río</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="huespedes">Huéspedes</label>
                <select id="huespedes" defaultValue="2 adultos">
                  <option>2 adultos</option>
                  <option>2 adultos · 1 niño</option>
                  <option>4 adultos</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="correo">Tu correo</label>
                <input id="correo" type="email" placeholder="hola@correo.com" />
              </div>
            </div>

            <button className="btn-reserve">Solicitar reserva →</button>
          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
          Transición: forest → dark, curva hacia arriba
      ========================================= */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="mark">Mi Linda Tierra</div>
            <p>Hotel boutique en San Carlos, Costa Rica. Once habitaciones, un río, un bosque, y la calma que te trajo hasta acá.</p>
          </div>
          <div className="footer-col">
            <h5>Síguenos</h5>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">TripAdvisor</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Contacto rápido</h5>
            <ul>
              <li><a href="tel:+50685212626">+506 8521-2626</a></li>
              <li><a href="mailto:hola@milindatierra.cr">hola@milindatierra.cr</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 — Mi Linda Tierra · CR</div>
          <div className="ornament">m</div>
          <div>Hecho con tierra, no con prisa.</div>
        </div>
      </footer>
    </>
  )
}
