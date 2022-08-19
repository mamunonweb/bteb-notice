import { MoonIcon, SunIcon } from './icons'
import createTheme from '../utils/theme'

export default function ThemeToggle() {
  const [theme, toggleTheme] = createTheme()

  return (
    <button
      title={theme() === 'dark' ? 'Dark theme' : 'White theme'}
      onClick={toggleTheme}
      className="p-2 rounded-full text-primary-500"
    >
      {theme() === 'dark' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
