import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'

type ThemeToggleProps = { theme: Theme; onToggle: () => void }

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'
  return (
    <button className="icon-button theme-toggle" type="button" onClick={onToggle} aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'} title={isDark ? 'Modo claro' : 'Modo oscuro'}>
      {isDark ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
    </button>
  )
}
