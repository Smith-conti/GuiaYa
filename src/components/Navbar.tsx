import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

type NavbarProps = { theme: Theme; onToggleTheme: () => void }
const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#sobre-cusco', label: 'Sobre Cusco' },
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar page-width" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="GuiaYa, ir al inicio">
          <span className="brand-mark"><Compass size={21} strokeWidth={1.8} /></span>
          <span className="brand-name">Guia<span>Ya</span></span>
        </a>
        <div className={`nav-links${menuOpen ? ' nav-links-open' : ''}`} id="primary-navigation">
          {links.map((link) => <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>)}
          <a className="mobile-cta" href="#destinos" onClick={closeMenu}>Ver destinos <span aria-hidden="true">↗</span></a>
        </div>
        <div className="nav-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a className="button button-small button-primary nav-cta" href="#destinos">Ver destinos <span aria-hidden="true">↗</span></a>
          <button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
