import { Destinations } from './components/Destinations'
import { AboutCusco } from './components/AboutCusco'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { useTheme } from './hooks/useTheme'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return <>
    <Navbar theme={theme} onToggleTheme={toggleTheme} />
    <main>
      <Hero />
      <Destinations />
      <AboutCusco />
      <Features />
    </main>
    <Footer />
  </>
}
