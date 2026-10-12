import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

// Sincroniza el tema visible con la preferencia guardada por el usuario.
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('guiaya-theme', theme)
    } catch {
      // La interfaz sigue funcionando si el almacenamiento está bloqueado.
    }
  }, [theme])

  return { theme, toggleTheme: () => setTheme((current) => current === 'dark' ? 'light' : 'dark') }
}
