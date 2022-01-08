import { createSignal, createEffect } from 'solid-js'

import { MoonIcon, SunIcon } from './icons'
import { getLocaleTheme, setLocaleTheme, setThemeClass } from '../utils/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = createSignal(getLocaleTheme())

  function toggleTheme() {
    const newTheme = theme() === 'DARK' ? 'WHITE' : 'DARK'
    setLocaleTheme(newTheme)
    setTheme(newTheme)
  }

  createEffect(() => {
    setThemeClass(theme())
  })

  return (
    <button
      title={theme() === 'DARK' ? 'Dark theme' : 'White theme'}
      onClick={toggleTheme}
      className="p-2 rounded-full text-primary-500"
    >
      {theme() === 'DARK' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
